import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView
} from 'react-native';
import React, { useState, useEffect } from 'react';
import CustomBtn from '../components/CustomBtn';
import InputText from '../components/InputText';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [pwd, setPwd] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [pwdError, setPwdError] = useState('');

  const [showSignupButton, setShowSignupButton] = useState(true);

  useEffect(() => {
    const successMessage = route.params?.successMessage;
    if (successMessage) {
      alert(successMessage);
      setShowSignupButton(false);
    }
  }, [route]);
 

  const handleLogin = async () => {
    const storedUserJSON = await AsyncStorage.getItem('user');
    const storedUser = JSON.parse(storedUserJSON);
    console.log(storedUser)
    setUser(storedUser)
    try {
      if (!userName || !pwd) {
        setUserNameError(!userName ? "Please Enter User Name!" : userNameError);
        setPwdError(!pwd ? "Please Enter Password!" : pwdError);
      } else {
        if (storedUser && storedUser.username === userName && storedUser.pwd === pwd) {
          dispatch(setUser(storedUser));
          navigation.navigate('Home');
          setUserName('');
          setPwd('');
        } else {
          alert('Please signup and then afet login');
        }
      }

    } catch (error) {
      console.error('Error saving data: ', error);
    }



  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar translucent={false} backgroundColor={"#8278FC"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../assest/splace.jpg')}
          resizeMode="contain"
          style={styles.imgStyle}
        />

        <View style={styles.loginContainer}>
          <View style={styles.loginTextCont}>
            <Text
              style={styles.loginText}
            >
              Login
            </Text>
          </View>
          <InputText
            value={userName}
            error={userNameError}
            onChangeText={text => {
              setUserName(text)
              setUserNameError("")
            }}
            lableName="User Name"
          />
          <InputText
            value={pwd}
            secureTextEntry={true}
            error={pwdError}
            onChangeText={text => {
              setPwd(text);
              setPwdError("")
            }}
            lableName="Password"
          />
        </View>

        <View style={{ marginTop: '8%' }}>
          <CustomBtn
            title={'Cancel'}
            style={{ alignSelf: 'center', backgroundColor: '#F4F4FC' }}
            textstyle={{ color: '#2A1BD3' }}
            onPress={() => {
              navigation.navigate("splace");
            }}
          />
          <CustomBtn
            title={'Login'}
            onPress={handleLogin}
            style={{ alignSelf: 'center', 
            marginTop: 15,
            marginVertical: showSignupButton === false ? 7 : 0
          }}
          />
        </View>


        {showSignupButton && (
            <CustomBtn
              title={'or sign-in with'}
              onPress={() => navigation.navigate("Signup")}
              style={{
                alignSelf: 'center',
                backgroundColor: "#fff",
                marginTop: 7
              }}
              textstyle={{ color: "blue" }}
            />
          )}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingHorizontal: 30,
            marginBottom: 40,
          }}>
          <CustomBtn
            title={'F'}
            style={{
              alignSelf: 'center',
              marginTop: 12,
              width: '25%',
              backgroundColor: '#EEEEEE',
            }}
            textstyle={{ color: '#B7B7B7' }}
          />
          <CustomBtn
            title={'G'}
            style={{
              alignSelf: 'center',
              marginTop: 12,
              width: '25%',
              backgroundColor: '#EEEEEE',
            }}
            textstyle={{ color: '#B7B7B7' }}
          />
          <CustomBtn
            title={'T'}
            style={{
              alignSelf: 'center',
              marginTop: 12,
              width: '25%',
              backgroundColor: '#EEEEEE',
            }}
            textstyle={{ color: '#B7B7B7' }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: width,
    height: 190,
    alignSelf: 'center',
    marginTop: '10%',
  },
  loginContainer: {
    flex: 1,
    alignItems:
      'center',
    marginTop:10
  },
  loginTextCont: {
    padding: 10,
    alignSelf: "flex-start",
    marginStart: 5
  },
  loginText: {
    fontSize: 24,
    fontWeight: 700,
    color: '#1E1E1E',

  }
});

export default LoginScreen;
