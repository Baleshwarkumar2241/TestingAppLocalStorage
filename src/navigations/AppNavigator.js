import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from '../Screens/Home';
import { useSelector } from 'react-redux';
import Profile from '../Screens/Profile';
import Signup from '../Screens/Signup';
import LoginScreen from '../Screens/LoginScreen';
import DrawerNavigator from './DrowerNavigation';
import Splace from '../Screens/Splace';


const Stack = createStackNavigator();

const AppNavigator = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Drawer" component={DrawerNavigator}  options={{headerShown:false}} />
          </>
         ) : ( 
          <>
            <Stack.Screen name="splace" component={Splace} options={{headerShown:false}} />
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
          </>
       )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
