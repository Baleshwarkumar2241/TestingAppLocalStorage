import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplaceScreen = () => {
    
  return (
    <View style={{flex:1}}>
      <Image 
      source={require("../Screens/")}
      />
    </View>
  )
}

export default SplaceScreen

const styles = StyleSheet.create({})