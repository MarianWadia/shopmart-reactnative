import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './LoginScreen'
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView>
            <View style={styles.header}>
                <Text style= {styles.wlcomeTxt}>Sign up!</Text>
                <Text style= {{fontSize: 18, color : 'gray'}}>Create an account</Text>
            </View>
            <View style={styles.body}>
                <View>
                    <Text style={{fontSize: 18, color: "black"}}>Email</Text>
                    <TextInput style={styles.input} placeholder='please enter your email' 
                        value={email} onChange={(e)=>setEmail(e.target.value)} />
                </View>
            </View>
            <View style={{marginTop: 40, alignItems: 'center', justifyContent: 'center', gap: 15}}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={{color: "white", fontSize: 15}}>Continue</Text>
                </TouchableOpacity>

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
