import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const LoginWithOtpBar = ({isOtpPressed, setIsOtpPressed }) => {

    const handlePress =()=>{
        setIsOtpPressed(true)
    }

    const handleRelease = ()=>{
        setIsOtpPressed(false)
    }
  return (
    <View style={{backgroundColor: 'white', alignItems: 'center', paddingTop: 60}}>
      <View style={{backgroundColor: 'gray', height: 55, width: "85%", 
        borderRadius: 20, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20}}
    >
        <TouchableOpacity onPress={handlePress} style={isOtpPressed ? styles.pressedStyles : styles.notPressedStyles}>
            <Text style={{textAlign: 'center', color: isOtpPressed ? 'gray': 'white'}}>Login with OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRelease} style={!isOtpPressed ? styles.pressedStyles : styles.notPressedStyles}>
            <Text style={{textAlign: 'center', color: !isOtpPressed ? 'gray': 'white'}}>Login with password</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginWithOtpBar

const styles = StyleSheet.create({
    pressedStyles: {
        backgroundColor: 'white', 
        height: 30, 
        width: "45%", 
        justifyContent: 'center', 
        borderRadius: 12,
        color: 'gray',
    },
    notPressedStyles: {
        color: 'white',
        backgroundColor: 'gray'
    }
})