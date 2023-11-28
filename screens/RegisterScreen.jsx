import { KeyboardAvoidingView, SafeAreaView, loginStylesheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { loginStyles } from './LoginScreen'
import { useNavigation } from '@react-navigation/native';
import BlueButton from '../components/BlueButton';
import { useUser } from '../context/UserContext';
import { initialUsers } from '../data/users';

const RegisterScreen = ({navigation}) => {
    const { users } = useUser()
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');

    const handleSignup = () => {
        if(email || phoneNumber){
            navigation.navigate('AfterRegister', {
                id: users.length + 1, 
                email,
                phoneNumber 
            })
        }
        console.log('Please enter email and phone number')
        console.log(email, phoneNumber)
    };

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
                        value={email} onChangeText={(text)=>setEmail(text)} />
                </View>
                <View>
                    <Text style={{fontSize: 18, color: "black"}}>Phone Number</Text>
                    <TextInput style={loginStyles.input} placeholder='please enter your phone number' 
                        value={phoneNumber} onChangeText={(text)=>setPhoneNumber(text)} />
                </View>
            </View>
            <View style={{marginTop: 40, alignItems: 'center', justifyContent: 'center', gap: 15}}>

                <BlueButton text='Continue' onPress={handleSignup} />

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
