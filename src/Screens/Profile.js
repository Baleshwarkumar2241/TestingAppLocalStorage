import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet, ActivityIndicator } from 'react-native';
import BackHeader from '../components/BackHeader';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import CustomBtn from '../components/CustomBtn';


const Profile = () => {
  const navigation = useNavigation()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  const dispatch = useDispatch()
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const storedUserJSON = await AsyncStorage.getItem('user');
      const storedUser = JSON.parse(storedUserJSON);
      setUser(storedUser);
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      await AsyncStorage.removeItem('user');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <BackHeader headerName={"My Account"} />

      {
        loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1, justifyContent: 'center' }} />
      ) : (
        user &&
        (
          <View style={{ padding: 20 }}>
            <View style={styles.textCont}>
              <Text style={styles.textStyle} >
                Mobile No.
              </Text>

              <View style={styles.textCont2} >
                <Text style={styles.textStyle2}>
                  {user.mobNum}
                </Text>
              </View>
            </View>

            <View style={styles.textCont}>
              <Text style={styles.textStyle}>FUll Name</Text>

              <View style={styles.textCont2} >
                <Text style={styles.textStyle2}>{user.fName} {user.lName} </Text>
              </View>
            </View>

            <View style={styles.textCont}>
              <Text style={styles.textStyle}>Username</Text>

              <View style={styles.textCont2} >
                <Text style={styles.textStyle2}>{user.username} </Text>
              </View>
            </View>

            <View style={styles.textCont}>
              <Text style={styles.textStyle}>Email</Text>

              <View style={styles.textCont2} >
                <Text style={styles.textStyle2}>{user.email} </Text>
              </View>
            </View>

          </View>

        )
        )}

      <CustomBtn
        title="Logout"
        onPress={handleLogout}
        style={{alignSelf:"center"}}
      />
    </View>
  );
};



export default Profile;

const styles = StyleSheet.create({
  textCont: {
    borderColor: "#E5E4E2",
    borderWidth: 1,
    justifyContent: "center",
    marginVertical: 10,
    paddingVertical: 10
  },
  textStyle: {
    color: "#696969",
    fontSize: 14,
    marginHorizontal: 10,
  },
  textCont2: {
    marginTop: 4,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    flexDirection: "row",

  },
  textStyle2: {
    color: "#000",
    fontSize: 16,
  }
})
