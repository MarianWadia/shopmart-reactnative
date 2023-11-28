import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { loginStyles } from '../screens/LoginScreen'
import { AfterLoginStyles } from '../screens/AfterLoginVerifyScreen'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import BlueButton from './BlueButton';
import { useUser } from '../context/UserContext';

const VerificationWithPassword = ({id, email, phoneNumber}) => {
  const [password, setPassword] = React.useState('');
  const [hidePassword, setHidePassword] = React.useState(true);
  const navigation = useNavigation()

  const { signup } = useUser();

  const handleSignup = () => {
    const newUser = { id, email, password, phoneNumber };
    console.log(newUser)
    signup(newUser);
    navigation.navigate('Main')
  }
  return (
    <KeyboardAvoidingView style={{flex:1, alignItems: 'center'}}>
        <View style={{marginTop: 50}}>
          <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>Account Verification</Text>
          <Text style={{textAlign: 'center', fontSize: 18, margin: 12, color: 'gray'}}>-- PASSWORD --</Text>
        </View>

        <View style={loginStyles.input}>
            <TextInput placeholder='please enter your password' 
                secureTextEntry={hidePassword} value={password} onChangeText={(text)=>setPassword(text)} />
            <TouchableOpacity onPress={()=>setHidePassword(!hidePassword)}>
                <AntDesign name="eyeo" size={24} color="gray" />     
            </TouchableOpacity>
        </View>

        <BlueButton text='Login' specialStyles={AfterLoginStyles.buttonStyles} onPress={handleSignup} />
    </KeyboardAvoidingView>
  )
}

export default VerificationWithPassword

const styles = StyleSheet.create({})