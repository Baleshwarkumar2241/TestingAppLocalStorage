import { Image, Pressable, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeaderScreen = () => {
    const navigation = useNavigation()
    const [localDataList, setLocalDataList] = useState([])
    console.log(localDataList.length)

    useEffect(()=>{
        getItemListData()
    },[])
    const getItemListData = async () => {
        try {
          const data = await AsyncStorage.getItem("selectUser");
          const parseData = data ? JSON.parse(data) : [];
          setLocalDataList(parseData);
        } catch (error) {
          console.log("Error", error);
        }
      };
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#8278FC',
                paddingHorizontal: 13,
                paddingVertical: 18,
            }}>
            <Pressable onPress={() => navigation.openDrawer()}>
                <Image
                    source={require('../assest/menu.png')}
                    resizeMode="contain"
                    style={{
                        width: 35,
                        height: 35,
                        alignSelf: 'center',
                        tintColor:'#FFF'
                    }}
                />
            </Pressable>
            <Text
                style={{
                    fontSize: 23,
                    fontWeight: 600,
                    color: '#FFF',
                    alignSelf: 'center',
                }}>
                Travel Platfrom
            </Text>
            <View
                style={{
                    alignSelf: 'center',
                }}
            >
                <Icon
                    name="notifications-none"
                    size={31}
                    color={"#FFF"}
                />

            </View>


        </View>
    );
};

export default HeaderScreen
const styles = StyleSheet.create({

})
