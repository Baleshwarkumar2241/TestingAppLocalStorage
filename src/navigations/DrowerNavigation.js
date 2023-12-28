import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './Main';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator >
    

      <Drawer.Screen
        name="main" 
        options={{
          drawerLabel: "Dashboard",
          headerShown: false,
          drawerLabelStyle: {
            fontWeight:"bold"
          },
          drawerIcon: ({ focused, size }) => (
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../assest/home__1.png")}
            />
          ),
        }}
        component={Main} 
      />

     
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;