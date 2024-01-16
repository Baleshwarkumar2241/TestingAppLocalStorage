import { Pressable, StyleSheet, Text, Dimensions } from 'react-native'
import React from 'react'

const CustomBtn = (props) => {
    const {title, onPress} = props
  return (
    <Pressable onPress={onPress} style={styles.BtnContainer}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  )
}

export default CustomBtn;
const {width} = Dimensions.get("screen")

const styles = StyleSheet.create({
    BtnContainer:{
        backgroundColor:"blue", 
        width:width-20, 
        padding:12,
        marginTop:20,
        borderRadius:5
    },
    btnText:{
        textAlign:'center', 
        color:"#fff", 
        fontSize:18, 
        fontWeight:"900"
    }
})