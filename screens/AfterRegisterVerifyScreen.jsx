import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LoginWithOtpBar from '../components/LoginWithOtpBar'
import VerificationWithOTP from '../components/VerificationWithOTP'
import VerificationWithPassword from '../components/VerificationWithPassword'

const AfterRegisterVerifyScreen = () => {
    const [isOtpPressed, setIsOtpPressed] = useState(false)

  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
        <LoginWithOtpBar isOtpPressed={isOtpPressed} setIsOtpPressed={setIsOtpPressed} />
        {isOtpPressed ? 
            (
                <View style={{marginTop: 40}}>
                    <VerificationWithOTP />
                </View>
                
            )
            : 
            (<VerificationWithPassword/>) 
        }
        
    </SafeAreaView>
  )
}

export default AfterRegisterVerifyScreen

const styles = StyleSheet.create({})