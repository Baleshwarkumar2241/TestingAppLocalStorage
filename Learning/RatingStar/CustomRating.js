import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomRating = ({ rating }) => {
  const totalStar = 5
  const star = []

  for (let i = 1; i <= totalStar; i++) {
    star.push(
      <Image
        key={i}
        source={
          i <= rating
           ? require("../assets/star-full.png") 
           : i === Math.ceil(rating) 
           ? require("../assets/star-half.png") 
           : require("../assets/star-outlined.png")
        }
        style={{ width: 30, height: 30 }}
      />
    )
  }

  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
      {star}
    </View>
  )
}

export default CustomRating

const styles = StyleSheet.create({})