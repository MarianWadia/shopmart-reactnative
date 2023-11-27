import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AfterLoginStyles } from '../screens/AfterLoginVerifyScreen'
import VerificationInputs from './VerificationInputs'
import { loginStyles } from '../screens/LoginScreen'
import {useNavigation} from "@react-navigation/native"


const VerificationWithOTP = () => {
  const navigation = useNavigation()

  return (
    <View style={{alignItems:'center'}}>
       <View>
        <Text style={{fontSize: 35, fontWeight: 'bold', textAlign: 'center'}}>Verify Your Phone</Text>
        <Text style={AfterLoginStyles.textStyle} >OTP has been sent to your phone to</Text>
        <Text style={AfterLoginStyles.textStyle}>+201001478951</Text>
        <Text style={AfterLoginStyles.textStyle}>via SMS</Text>
      </View>
      <View style={AfterLoginStyles.inputsContainer}>
        <VerificationInputs />
        <VerificationInputs />
        <VerificationInputs />
        <VerificationInputs />
        <VerificationInputs />
      </View>

      <View style={{flexDirection: 'row', gap: 5, marginTop: 20}}>
        <Text>00:00</Text> 
        <TouchableOpacity>
            <Text style={{color: '#28bff1'}}>Resend OTP via SMS</Text>
        </TouchableOpacity>
    </View>

      <TouchableOpacity style={[loginStyles.buttonContainer, AfterLoginStyles.buttonStyles]} onPress={()=>navigation.navigate('Main')}>
        <Text style={{color: "white", fontSize: 15}}>Continue</Text>
      </TouchableOpacity>

    </View>
  )
}

export default VerificationWithOTP

const styles = StyleSheet.create({})