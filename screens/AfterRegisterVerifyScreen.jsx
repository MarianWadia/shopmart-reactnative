import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LoginWithOtpBar from '../components/LoginWithOtpBar'
import VerificationWithOTP from '../components/VerificationWithOTP'
import VerificationWithPassword from '../components/VerificationWithPassword'

const AfterRegisterVerifyScreen = ({route}) => {
    const [isOtpPressed, setIsOtpPressed] = React.useState(false)
    const {id, email, phoneNumber } = route.params
    console.log(id, email, phoneNumber)

  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
        <LoginWithOtpBar isOtpPressed={isOtpPressed} setIsOtpPressed={setIsOtpPressed} />
        {isOtpPressed ? 
            (
                <View style={{marginTop: 40}}>
                    <VerificationWithOTP phoneNumber={phoneNumber} />
                </View>
                
            )
            : 
            (<VerificationWithPassword id={id} email={email} phoneNumber={phoneNumber}/>) 
        }
        
    </SafeAreaView>
  )
}

export default AfterRegisterVerifyScreen

const styles = StyleSheet.create({})