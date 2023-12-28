import {PermissionsAndroid,} from "react-native"
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigations/AppNavigator';
import store from './src/redux/store';

const App = () => {
  useEffect(()=>{
    requestLocationPermission()
  },[])
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'App Location Permission',
          message:
            'App needs access to your Location ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
   
  );
};

export default App;
























