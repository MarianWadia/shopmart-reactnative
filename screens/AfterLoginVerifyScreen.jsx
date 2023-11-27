import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import VerificationWithOTP from '../components/VerificationWithOTP'

const AfterLoginVerifyScreen = () => {
  return (
    <SafeAreaView style={AfterLoginStyles.container}>
        <VerificationWithOTP />
    </SafeAreaView>
  )
}

export default AfterLoginVerifyScreen

export const AfterLoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 120,
        backgroundColor: 'white',
    },
    textStyle: {
        fontSize: 15, 
        textAlign: 'center', 
        color: 'gray'
    }, 
    buttonStyles: {
        marginTop: 80,

    },
    inputsContainer:{
        flexDirection: 'row',
        gap: 10,
        marginTop: 40
    },
})