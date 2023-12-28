import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderScreen from '../components/HeaderScreen'
import Productlist from '../components/Productlist'

const Home = () => {
  return (
    <View style={{flex:1}}>
      <HeaderScreen/>
      <Productlist/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})