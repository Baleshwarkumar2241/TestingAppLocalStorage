import {Dimensions, StyleSheet, Text, Pressable} from "react-native"
import React from "react";


const CustomBtn = (props) => {
    const {title, onPress, btnBoxStyle, btnTextStyle} = props;
    return(
        <Pressable style={[styles.BtnBox, btnBoxStyle]} onPress={onPress}>
            <Text style={[styles.BtnText,btnTextStyle]}>{title}</Text>
        </Pressable>
    )
}

export default CustomBtn;

const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
    BtnBox:{
        width: width-15,
        backgroundColor:"orange",
        alignSelf:'center',
        paddingVertical:10,
        borderRadius:8
    },
    BtnText:{
        textAlign:'center',
        fontWeight:'800',
        fontSize:18,
        color:'#FFF'
    }
})