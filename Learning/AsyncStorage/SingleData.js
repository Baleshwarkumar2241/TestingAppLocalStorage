import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomBtn from './CustomBtn'
import CustomeTextInput from './CustomeTextInput'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SingleData = () => {
    const [data, setData] = useState("")
    const [errorData, setErrorData] = useState("");

    const [storageListData, setStorageListData] = useState("")

    const addAsyncStorageData = async () => {
        try {
            if (!data) {
                setErrorData(!data ? "Enter a list item" : errorData)
            } else {
                await AsyncStorage.setItem("DATA",data)
                setData("")
                await getDataAsyncStorage()
                // alert("Data is added!!")
            }
        } catch (error) {
            console.log("Error", error)
        }
    }

    const getDataAsyncStorage = async()=>{
        try {
            const item = await AsyncStorage.getItem("DATA")
            setStorageListData(item)
        } catch (error) {
            console.log("Error",error)
        }
    }

    return (
        <View style={{ flex: 1, marginTop:20 }}>
            <Text style={{ fontSize: 20, textAlign: "center", color: 'yellow' }}>Store Single Data in AsyncStorage</Text>
            <View style={{ alignItems: "center", marginTop: 20 }}>
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

            <View style={{marginTop:20, width:width-20, alignSelf:'center', flexDirection:'row'}}>
                <Text style={styles.listText}>Your data is : </Text>
                <Text style={styles.listText2}>{storageListData}</Text>
            </View>
        </View>
    )
}

export default SingleData

const {width} = Dimensions.get("screen")
const styles = StyleSheet.create({
    listText:{
        fontSize:20,
        color:'#fff'
    },
    listText2:{
        fontSize:20,
        color:'#0fefef'
    }
})