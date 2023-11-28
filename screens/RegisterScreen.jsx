import { KeyboardAvoidingView, SafeAreaView, loginStylesheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { loginStyles } from './LoginScreen'
import { useNavigation } from '@react-navigation/native';
import BlueButton from '../components/BlueButton';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation()
    const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <SafeAreaView style={loginStyles.container}>
        <KeyboardAvoidingView>
            <View style={loginStyles.header}>
                <Text style= {loginStyles.wlcomeTxt}>Sign up!</Text>
                <Text style= {{fontSize: 18, color : 'gray'}}>Create an account</Text>
            </View>
            <View style={loginStyles.body}>
                <View>
                    <Text style={{fontSize: 18, color: "black"}}>Email</Text>
                    <TextInput style={loginStyles.input} placeholder='please enter your email' 
                        value={email} onChange={(e)=>setEmail(e.target.value)} />
                </View>
                <View>
                    <Text style={{fontSize: 18, color: "black"}}>Phone Number</Text>
                    <TextInput style={loginStyles.input} placeholder='please enter your phone number' 
                        value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
                </View>
            </View>
            <View style={{marginTop: 40, alignItems: 'center', justifyContent: 'center', gap: 15}}>

                <BlueButton text='Continue' onPress={()=>navigation.navigate('AfterRegister')} />

                <View style={{flexDirection: 'row'}}>
                    <Text>Already Have an account? </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text style={{color: "#02a4da", fontSize: 15, textDecorationLine: 'underline'}}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
     </SafeAreaView>
  )
}

export default RegisterScreen
