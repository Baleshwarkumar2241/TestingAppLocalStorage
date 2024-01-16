import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomBtnTimer from './CustomBtnTimer'

const TimerScreen = () => {
    const [timer, setTimer] = useState({ ms: 0, s: 0, m: 0, h: 0 })
    const [isRuning, setIsRuning] = useState(0)
    const [intervalId, setIntervalId] = useState(null)


    const handleStart = () => {
        setIntervalId(setInterval(run, 10))
        setIsRuning(1)
    }
    const handleStop = () => {
        clearInterval(intervalId)
        setIsRuning(2)
        alert(`${m} : ${s} : ${ms}`)
    }
    const handleResume = () => {
        handleStart()
        setIsRuning(1)
    }
    const handleReset = () => {
        setIsRuning(0)
        clearInterval(intervalId)
        setTimer({ ms: 0, s: 0, m: 0, h: 0 })
    }



    const run = () => {
        setTimer((preTime) => {
            var uh = preTime.h, um = preTime.m, us = preTime.s, ums = preTime.ms + 1
            if (ums === 100) {
                us++
                ums = 0
            }
            if (us === 60) {
                um++
                us = 0
            }
            if (um === 60) {
                uh++
                um = 0
            }
            return { ms: ums, s: us, m: um, h: uh }
        })
    }

    let h = timer.h >= 10 ? timer.h : `0${timer.h}`
    let m = timer.m >= 10 ? timer.m : `0${timer.m}`
    let s = timer.s >= 10 ? timer.s : `0${timer.s}`
    let ms = timer.ms >= 10 ? timer.ms : `0${timer.ms}`
    return (
        <View style={styles.conatiner}>
            <Text style={styles.timerTitle}>Timer App</Text>

            <View style={styles.timerContainer}>
                <View style={styles.timerBox}>
                    <Text style={styles.timerText}>{h} : </Text>
                    <Text style={styles.timerText}>{m} : </Text>
                    <Text style={styles.timerText}>{s} : </Text>
                    <Text style={styles.timerText}>{ms}</Text>
                </View>
                <View style={styles.timerBtnContainer}>
                    {
                        isRuning === 0 ? (
                            <CustomBtnTimer
                                title="Start"
                                onPress={handleStart}
                            />
                        ) : isRuning === 1 ? (
                            <View>
                                <CustomBtnTimer
                                    title="Stop"
                                    onPress={handleStop}
                                    style={{ backgroundColor: "red" }} />
                                <CustomBtnTimer
                                    title="Reset"
                                    onPress={handleReset}
                                    style={{ backgroundColor: "orange", marginTop: 10 }} />
                            </View>
                        )
                            : isRuning === 2 ? <View>
                                <CustomBtnTimer
                                    title="Resume"
                                    onPress={handleResume} />
                                <CustomBtnTimer
                                    title="Reset"
                                    onPress={handleReset}
                                    style={{ backgroundColor: "orange", marginTop: 10 }} />
                            </View>

                                : ""
                    }

                </View>
            </View>
        </View>
    )
}

export default TimerScreen

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    timerTitle: {
        fontSize: 24,
        fontWeight: '600'
    },
    timerContainer: {
        width: width - 20,
        marginTop: 20,
        backgroundColor: "lightgrey",
        alignItems: "center",
        paddingVertical: 15
    },
    timerBox: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    timerText: {
        fontSize: 22,
        fontWeight: "600"
    },
    timerBtnContainer: {
        marginTop: 16
    }
})