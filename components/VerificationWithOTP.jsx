import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AfterLoginStyles } from '../screens/AfterLoginVerifyScreen'
import VerificationInputs from './VerificationInputs'
import {useNavigation} from "@react-navigation/native"
import BlueButton from './BlueButton'


const VerificationWithOTP = ({phoneNumber}) => {
  const navigation = useNavigation()

  return (
    <View style={{alignItems:'center'}}>
       <View>
        <Text style={{fontSize: 35, fontWeight: 'bold', textAlign: 'center'}}>Verify Your Phone</Text>
        <Text style={AfterLoginStyles.textStyle} >OTP has been sent to your phone to</Text>
        <Text style={AfterLoginStyles.textStyle}>{phoneNumber}</Text>
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

      <BlueButton specialStyles={AfterLoginStyles.buttonStyles} text='Continue' onPress={()=>navigation.navigate('Main')}/>

    </View>
  )
}

export default VerificationWithOTP

const styles = StyleSheet.create({})