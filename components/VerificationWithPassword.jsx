import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { loginStyles } from '../screens/LoginScreen'
import { AfterLoginStyles } from '../screens/AfterLoginVerifyScreen'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const VerificationWithPassword = () => {
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation()

  return (
    <KeyboardAvoidingView style={{flex:1, alignItems: 'center'}}>
        <View style={{marginTop: 50}}>
          <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>Account Verification</Text>
          <Text style={{textAlign: 'center', fontSize: 18, margin: 12, color: 'gray'}}>-- PASSWORD --</Text>
        </View>

        <View style={loginStyles.input}>
            <TextInput placeholder='please enter your password' 
                secureTextEntry={hidePassword} value={password} onChange={(e)=>setPassword(e.target.value)} />
            <TouchableOpacity onPress={()=>setHidePassword(!hidePassword)}>
                <AntDesign name="eyeo" size={24} color="gray" />     
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={[loginStyles.buttonContainer, AfterLoginStyles.buttonStyles]} onPress={()=>navigation.navigate('Main')}>
          <Text style={{color: "white", fontSize: 15}}>Continue</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default VerificationWithPassword

const styles = StyleSheet.create({})