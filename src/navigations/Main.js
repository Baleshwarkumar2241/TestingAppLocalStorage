import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import LocationScreen from '../Screens/LocationScreen';


const Tab = createBottomTabNavigator();


const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarOptions: {
            showLabel: false,
          },
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={
                focused
                  ? {
                    fontSize: 14,
                    marginTop: -10,
                    marginBottom: 4,
                    color: "blue",
                  }
                  : {
                    fontSize: 12,
                    marginTop: -5,
                    marginBottom: 4,
                    color: "#000",
                  }
              }
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ size, focused, color }) => {
            let iconName;

            return (
              <Image
                style={{
                  width: 18,
                  height: 18,
                  tintColor: (iconName = focused
                    ? "blue"
                    : "black"),
                }}
                source={
                  (iconName = focused
                    ? require("../assest/home_solid.png")
                    : require("../assest/home_strokk.png"))
                }
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarOptions: {
            showLabel: false,
          },
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={
                focused
                  ? {
                    fontSize: 14,
                    marginTop: -5,
                    marginBottom: 4,
                    color: "blue",
                  }
                  : {
                    fontSize: 12,
                    marginTop: -5,
                    marginBottom: 4,
                    color: "#000",
                  }
              }
            >
              Location
            </Text>
          ),
          tabBarIcon: ({ size, focused, color }) => {
            let iconName;

            return (
              <Image
                style={{
                  width: 18,
                  height: 18,
                  tintColor: (iconName = focused
                    ? "blue"
                    : "black"),
                }}
                source={
                  (iconName = focused
                    ? require("../assest/location.png")
                    : require("../assest/address__1.png"))
                }
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarOptions: {
            showLabel: false,
          },
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={
                focused
                  ? {
                    fontSize: 14,
                    marginTop: -5,
                    marginBottom: 4,
                    color: "blue",
                  }
                  : {
                    fontSize: 12,
                    marginTop: -5,
                    marginBottom: 4,
                    color: "#000",
                  }
              }
            >
              Profile
            </Text>
          ),
          tabBarIcon: ({ size, focused, color }) => {
            let iconName;

            return (
              <Image
                style={{
                  width: 18,
                  height: 18,
                  tintColor: (iconName = focused
                    ? "blue"
                    : "black"),
                }}
                source={
                  (iconName = focused
                    ? require("../assest/user_solid.png")
                    : require("../assest/user_strokk.png"))
                }
              />
            );
          },
        }}
      />

    </Tab.Navigator>
  )
}

export default Main

const styles = StyleSheet.create({})