import { StyleSheet, Dimensions, TextInput, View ,placeholderTextColor, Text} from 'react-native'
import React from 'react'

const CustomeTextInput = (props) => {
    const {style, placeholder, value, onChangeText, placeholderTextColor, error} = props
  return (
    <View>
      <TextInput 
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[style,styles.textInpuStyle]}
        placeholderTextColor={placeholderTextColor}
      />
      {error ? <Text style={styles.errorStyle}>{error}</Text> : null}
    </View>
  )
}

export default CustomeTextInput
const {width} = Dimensions.get("screen")
const styles = StyleSheet.create({
    textInpuStyle:{
        fontSize:18, 
        borderWidth:0.7, 
        width:width-20, 
        borderColor:"white",
        color:'#FFF', 
        paddingLeft:10, 
        paddingVertical:15,
        borderRadius:5
    },
    errorStyle:{
        padding:4,
        color:'red',
        fontSize:14
    }
})