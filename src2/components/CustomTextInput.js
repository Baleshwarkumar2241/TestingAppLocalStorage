import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomTextInput = (props) => {
    const { inputStyle, inputBoxStyle, title, onChangeText, value, secureTextEntry} = props
    return (
        <View style={[styles.inputBox, inputBoxStyle]}>
            <Text style={styles.inputTitle}>{title}</Text>
            <TextInput
                onChangeText={onChangeText}
                value={value}
                style={[inputStyle, styles.inputText]}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

export default CustomTextInput

const {width} = Dimensions.get("screen")

const styles = StyleSheet.create({
    inputBox:{
        width:width - 15,
        alignSelf:'center'
    },
    inputTitle:{
        position:'absolute',
        color:"darkblue",
        fontSize:15,
        fontWeight:'500'
    },
    inputText: {
        borderBottomWidth: 1,
        borderBottomColor:'darkblue',
        marginVertical:10,
        fontSize:18
    }
})