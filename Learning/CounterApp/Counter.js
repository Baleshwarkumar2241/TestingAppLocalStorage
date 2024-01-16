import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount((preCount)=>preCount + 1)
    }
    const handleDecrement = () => {
        if(count > 0){
            setCount((preDec)=>preDec - 1)
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Counter App</Text>

            <View style={styles.counterBox}>

                <TouchableOpacity style={styles.incBox} onPress={handleIncrement}>
                    <Text style={styles.incText}>Increment</Text>
                </TouchableOpacity>

                <Text style={styles.incDecText}>{count}</Text>

                <TouchableOpacity onPress={handleDecrement} style={[styles.incBox,{backgroundColor:'red'}]}>
                    <Text style={styles.incText}>Decrement</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={()=>count > 0 && setCount(count-1)} style={[styles.incBox,{backgroundColor:'red'}]}>
                    <Text style={styles.incText}>Decrement</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

export default Counter

const { width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 30
    },
    counterText: {
        fontSize: 20,
        fontWeight: "bold",
        color:'green'
    },
    counterBox: {
        width: width - 20,
        backgroundColor: "lightgrey",
        alignItems: "center",
        paddingVertical: 20,
        marginTop: 30
    },
    incDecText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical:10
    },
    incBox: {
        backgroundColor: 'blue',
        width: width / 3,
        padding: 10,
        borderRadius: 5,
        alignItems:'center'
    },
    incText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    }
})