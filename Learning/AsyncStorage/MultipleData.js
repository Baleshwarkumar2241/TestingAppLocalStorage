import { Dimensions, FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomBtn from './CustomBtn'
import CustomeTextInput from './CustomeTextInput'
import AsyncStorage from '@react-native-async-storage/async-storage'

const MultipleData = () => {
    const [data, setData] = useState("")
    const [errorData, setErrorData] = useState("");
    const [storageListData, setStorageListData] = useState([])

    useEffect(() => {
        getDataAsyncStorage()
    }, [])

    const addAsyncStorageData = async () => {
        try {
            if (!data) {
                setErrorData(!data ? "Enter a list item" : errorData)
            } else {
                storageListData.push(data)
                const output = JSON.stringify(storageListData)
                await AsyncStorage.setItem("LISTITEM", output)
                setData("")
            }
        } catch (error) {
            console.log("Error", error)
        }
    }

    const getDataAsyncStorage = async () => {
        try {
            const item = await AsyncStorage.getItem("LISTITEM")
            const res = JSON.parse(item)
            setStorageListData(res)
        } catch (error) {
            console.log("Error", error)
        }
    }

    const removeItemFromList = async (remItem) => {
        try {
            const tempData = storageListData;
            const updatedList = tempData.filter(item => item !== remItem);
            setStorageListData(updatedList)
            const output = JSON.stringify(updatedList)
            await AsyncStorage.setItem("LISTITEM", output)
        } catch (error) {
            console.log("Error", error)
        }
    }

    return (
        <View style={{ flex: 1, marginTop: 20 }}>
            <Text style={{ fontSize: 20, textAlign: "center", color: 'yellow' }}>Store Multiple Data in AsyncStorage</Text>
            <View style={{ alignItems: "center", marginTop: 20, }}>
                <CustomeTextInput
                    error={errorData}
                    value={data}
                    onChangeText={(text) => {
                        setData(text)
                        setErrorData("")
                    }
                    }
                    placeholder='Enter a list item..'
                    placeholderTextColor="#fff"

                />
                <CustomBtn
                    title={"Add Item"}
                    onPress={() => { addAsyncStorageData() }}
                />
            </View>
            

            <View style={{ marginTop: 20, flex:1, alignSelf: "center" }}>
                <FlatList
                    data={storageListData}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.listContainer}>
                                <View style={{ width: width / 1.7 }}>
                                    <Text style={styles.listText2}>{item}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Pressable style={styles.editBox} >
                                        <Text style={styles.editText}>Edit</Text>
                                    </Pressable>
                                    <Pressable style={styles.deleteBox} onPress={() => removeItemFromList(item)}>
                                        <Text style={styles.editText}>delete</Text>
                                    </Pressable>
                                </View>
                            </View>
                        )
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default MultipleData

const { width } = Dimensions.get("screen")
const styles = StyleSheet.create({
    listContainer: { flexDirection: 'row', justifyContent: "space-between", backgroundColor: "#eee", marginVertical: 4, paddingVertical: 13, paddingHorizontal: 10, borderRadius: 3, alignItems: "center" },
    listText: {
        fontSize: 20,
        color: '#fff'
    },
    listText2: {
        fontSize: 20,
        color: 'red',
        textAlign: "justify"
    },
    editBox: { backgroundColor: "blue", marginEnd: 5, padding: 4, height: 40, justifyContent: "center", alignItems: 'center', width: 50, borderRadius:8 },
    editText:{
        fontWeight:'bold',
        color:'#fff'
    },
    deleteBox: { backgroundColor: "red", padding: 5, height: 40, justifyContent: "center", width: 50, alignItems: "center",borderRadius:8 },
})