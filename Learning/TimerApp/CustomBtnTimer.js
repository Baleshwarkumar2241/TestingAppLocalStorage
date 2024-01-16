import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomBtnTimer = (props) => {
    const {title, onPress, style} = props;
  return (
    <Pressable onPress={onPress} style={[styles.container,style]}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  )
}

export default CustomBtnTimer
const {width, height} = Dimensions.get("screen")
const styles = StyleSheet.create({
    container:{
        width:width/4,
        backgroundColor:"blue",
        alignItems:'center',
        paddingVertical:6,
        borderRadius:5
    },
    btnText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff'
    }
})