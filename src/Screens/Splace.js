import {  ImageBackground, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const Splace = props => {
    const { navigation } = props;
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
    useEffect(() => {
      const shouldNavigateToLogin = true; 
  
      setTimeout(() => {
        if (shouldNavigateToLogin) {
          navigation.replace('Login');
        } else {
          navigation.replace('Signup');
        }
      }, 1000); 
      isAuthenticated
    }, [dispatch, navigation]);
    return (
        <>
        <StatusBar backgroundColor={"#8278FC"} />

        <ImageBackground
            source={require('../assest/splace.jpg')}
            resizeMode="cover"
            style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#fff',
                justifyContent: 'flex-end',
            }}>
        </ImageBackground>
        </>
    );
};

export default Splace;

