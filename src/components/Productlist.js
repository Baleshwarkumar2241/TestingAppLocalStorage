import { ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text, View,RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetchProductApi from '../redux/Thunks/fetchProductapi';
import { STATUS } from '../redux/ProductSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Productlist = () => {
  const [localDataList, setLocalDataList] = useState([])
  const [isRefreshing, setIsRefreshing] = useState(false);

  const dispatch = useDispatch()
  const { data: remoteData, status } = useSelector((state) => state.product)
  useEffect(() => {
    dispatch(fetchProductApi())
    getItemListData()
  }, []);

  const handleAdd = async (data) => {
    try {
      const isItemAlreadyAdded = localDataList.some((item) => item.id === data.id);
  
      if (!isItemAlreadyAdded) {
        setLocalDataList((prevData) => [...prevData, data]);
        await AsyncStorage.setItem('selectUser', JSON.stringify([...localDataList, data]));
      } else {
        alert('Item is already added in offline storage');
      }
    } catch (error) {
      console.log("Error", error);
    }
  };


  const handleRemove = async (id) => {
    try {
      const data = await AsyncStorage.getItem('selectUser');
      if (!data) {
        return;
      }
      const parsedData = JSON.parse(data);
  
      const updatedData = parsedData.filter((item) => item.id !== id);
  
      await AsyncStorage.setItem('selectUser', JSON.stringify(updatedData));
      setLocalDataList(updatedData);
    } catch (error) {
      console.log('Error removing item from AsyncStorage:', error);
    }
  };

  
  const getItemListData = async () => {
    try {
      const data = await AsyncStorage.getItem("selectUser");
      const parseData = data ? JSON.parse(data) : [];
      setLocalDataList(parseData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    dispatch(fetchProductApi());
    getItemListData();
    setIsRefreshing(false);
  };


  if (status === STATUS.LOADING) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1, justifyContent: 'center' }} />
    )
  } else {
    if(remoteData.length > 0){
      return (
        <View style={{ flex: 1 }}>
            <FlatList
              data={remoteData}
              renderItem={({ item }) => {
                return (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>Price: {item.price}</Text>
                    <Pressable style={styles.addBtn} onPress={() => handleAdd(item)}>
                      <Text style={styles.addText}>Add</Text>
                    </Pressable>
                  </View>
                );
              }}
              numColumns={2}
              keyExtractor={(item) => item.id.toString()}
              refreshControl={
                <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
              }
            />
        </View>
      );
    }else{
      return (
        <View style={{ flex: 1 }}>
            <FlatList
              data={localDataList}
              renderItem={({ item }) => {
                return (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>Price: {item.price}</Text>
                    <Pressable style={styles.remBtn} onPress={() => handleRemove(item.id)}>
                      <Text style={styles.addText}>Delete</Text>
                    </Pressable>
                  </View>
                );
              }}
              numColumns={2}
              keyExtractor={(item) => item.id.toString()}
              refreshControl={
                <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
              }
            />
        </View>
      );
    }
  }


};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 15,
    // elevation:6,
    borderWidth: 0.2,
    borderRadius: 6
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginVertical: 8,

  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"black"
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  addBtn: {
    backgroundColor: "blue",
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 5
  },
  addText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#fff"
  },
  remBtn: {
    backgroundColor: "red",
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 5
  },
 

});

export default Productlist;
