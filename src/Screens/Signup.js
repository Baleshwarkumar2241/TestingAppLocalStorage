import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';
import React, { useState } from 'react';
import InputText from '../components/InputText';
import CustomBtn from '../components/CustomBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({ navigation }) => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');
  const [mobNum, setMobNum] = useState('');


  const [fNameError, setFNameError] = useState('');
  const [lNameError, setLNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [pwdError, setPwdError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobNumError, setMobNumError] = useState('');

  const handleSignup = async () => {
    if (!fName || !lName || !username || !pwd || !email || !mobNum) {
      setFNameError(!fName ? "Please Enter First Name!" : fNameError);
      setLNameError(!lName ? "Please Enter Last Name Field!" : lNameError);
      setUsernameError(!username ? "Please Enter Last Name Field!" : usernameError);
      setPwdError(!pwd ? "Please Enter Last Name Field!" : pwdError);
      setEmailError(!email ? "Please Enter Email Field!" : emailError);
      setMobNumError(!mobNum ? "Please Enter mobNum Field!" : mobNumError);
    } else {
      const user = { fName, lName, username, pwd, email, mobNum };
      await AsyncStorage.setItem('user', JSON.stringify(user));
      setFName('');
      setLName('');
      setMobNum('');
      setEmail('');
      setUsername("")
      setPwd("")
      navigation.navigate('Login', { successMessage: 'Signup successful! Please log in.' })
    
    }


  };

  return (
    <View style={styles.container}>
    <StatusBar translucent={false} backgroundColor={"#8278FC"} />
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? null : null}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS == 'android' ? 25 : null}>
        <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            contentContainerStyle={styles.scrollView}>
            <View style={{ paddingBottom: '7%' }}>
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: 800,
                        color: '#8278FC',
                        alignSelf: 'center',
                    }}>
                    USER INFORMATIONS
                </Text>
            </View>
            <View
                style={{
                    marginBottom: 10,
                    marginHorizontal: 8,
                }}>
                <InputText
                    value={fName}
                    error={fNameError}
                    onChangeText={text => {
                        setFName(text)
                        setFNameError("")
                    }}
                    lableName="First Name"
                />
                <InputText
                    value={lName}
                    error={lNameError}
                    onChangeText={text => {
                        setLName(text);
                        setLNameError("")
                    }}
                    lableName="Last Name"
                />
                <InputText
                    value={username}
                    error={usernameError}
                    onChangeText={text => {
                        setUsername(text);
                        setUsernameError("")
                    }}
                    lableName="Username"
                />
                <InputText
                    value={pwd}
                    error={pwdError}
                    onChangeText={text => {
                        setPwd(text);
                        setPwdError("")
                    }}
                    lableName="Password"
                    secureTextEntry={true}
                />
                <InputText
                    value={email}
                    error={emailError}
                    onChangeText={text => {
                        setEmail(text);
                        setEmailError("")
                    }}
                    lableName="Email"
                />
                <InputText
                    value={mobNum}
                    error={mobNumError}
                    onChangeText={text => {
                        setMobNum(text);
                        setMobNumError("")
                    }}
                    lableName="mobNum"
                    isNumber={true}
                />
            </View>
            <View style={{marginTop:"4%"}}>
                <CustomBtn
                    title={'Cancel'}
                    style={{ alignSelf: 'center', backgroundColor: '#F4F4FC' }}
                    textstyle={{ color: '#2A1BD3' }}
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
                <CustomBtn
                    title={'Signup'}
                    onPress={handleSignup}
                    style={styles.button}
                    textstyle={styles.textButton}
                />
            </View>

        </ScrollView>
    </KeyboardAvoidingView>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      paddingTop: '5%',
  },
  button: {
      alignSelf: 'center',
      //   backgroundColor: '#F4F4FC',
      marginTop: '4%',
  },
  textButton: {
      fontSize: 16,
      fontWeight: '900',
  },
});


export default Signup;
