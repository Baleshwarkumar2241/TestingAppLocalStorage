// import {PermissionsAndroid,} from "react-native"
// import React, { useEffect } from 'react';
// import { Provider } from 'react-redux';
// import AppNavigator from './src/navigations/AppNavigator';
// import store from './src/redux/store';

// const App = () => {
//   useEffect(()=>{
//     requestLocationPermission()
//   },[])
//   const requestLocationPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'App Location Permission',
//           message:
//             'App needs access to your Location ' +
//             'so you can take awesome pictures.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('You can use the Location');
//       } else {
//         console.log('Location permission denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   return (
//     <Provider store={store}>
//       <AppNavigator />
//     </Provider>

//   );
// };

// export default App;

// TODO =====================================================================


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import SingleData from './Learning/AsyncStorage/SingleData'
// import MultipleData from './Learning/AsyncStorage/MultipleData'
// import Counter from './Learning/CounterApp/Counter'
// import TimerScreen from './Learning/TimerApp/TimerScreen'
// import CustomRating from './Learning/RatingStar/CustomRating'

// const App = () => {
//   return (
//     <View style={styles.conatiner}>
//       {/* <SingleData/> */}
//       {/* <MultipleData/> */}
//       {/* <Counter/> */}
//       <TimerScreen/>
//       {/* <CustomRating rating={1}/> */}
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   conatiner:{
//     flex:1,
//     // backgroundColor:"grey",
//   }
// })

import { StyleSheet, SafeAreaView} from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './Screens/HomeScreen';
const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create({})




















