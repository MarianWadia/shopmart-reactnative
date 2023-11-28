import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import BlueButton from '../components/BlueButton';
import { useUser } from '../context/UserContext';


const LoginScreen = () => {
    const { login, currentUser } = useUser();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [hidePassword, setHidePassword] = React.useState(true);
    
    const navigation = useNavigation()

    const handleLogin = () => {
        login(email, password);
        if(currentUser){
            navigation.navigate('AfterLogin')
        }
      };


  return (
    <SafeAreaView style={loginStyles.container}>
        <KeyboardAvoidingView>
            <View style={loginStyles.header}>
                <Text style= {loginStyles.wlcomeTxt}>Welcome back!</Text>
                <Text style= {{fontSize: 18, color : 'gray'}}>Login to your account</Text>
            </View>

            <View style={loginStyles.body}>
                <View>
                    <Text style={{fontSize: 18, color: "black"}}>Email or Mobile number</Text>
                    <TextInput style={loginStyles.input} placeholder='please enter your email' 
                        value={email} onChangeText={(text)=>setEmail(text)} />
                </View>
                <View style={{flexDirection: 'column', width: 350}}>
                    <Text style={{fontSize: 18, color: "black"}}>Password</Text>
                    <View style={loginStyles.input}>
                        <TextInput placeholder='please enter your password' 
                            secureTextEntry={hidePassword} value={password} onChangeText={(text)=>setPassword(text)} />
                        <TouchableOpacity onPress={()=>setHidePassword(!hidePassword)}>
                            <AntDesign name="eyeo" size={24} color="gray" />     
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{alignSelf: 'flex-end', marginTop: 8}}>
                        <Text>Forget Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={{marginTop: 40, alignItems: 'center', justifyContent: 'center', gap: 15}}>

                <BlueButton onPress={handleLogin} text='Login'/>
                
                <TouchableOpacity onPress={()=>navigation.navigate('Main')}>
                    <Text style={{color: "#02a4da", fontSize: 15}}>Continue as a Guest</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{color: "black", fontSize: 15, textDecorationLine: 'underline'}}>OR Login With</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[loginStyles.buttonContainer, loginStyles.loginWithButton]}>
                    <AntDesign name="facebook-square" size={24} color="#4169e1" />
                    <Text style={{color: "#778899", fontSize: 15}}>Continue with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[loginStyles.buttonContainer, loginStyles.loginWithButton]}>
                    <Image 
                        source={{uri: 'https://th.bing.com/th/id/R.68fc8758cbb72878f025459d1ab12465?rik=p%2fzYsNa11f%2bKvQ&pid=ImgRaw&r=0'}}
                        style={{ width: 24, height: 24}}
                    />
                    <Text style={{color: "#778899", fontSize: 15}}>Continue with Google</Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row'}}>
                    <Text>Don't Have an account? </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
                        <Text style={{color: "#02a4da", fontSize: 15, textDecorationLine: 'underline'}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 40,
        alignItems: 'center'
    },
    header: {
        marginTop: 50,
        display: "flex",
        flexDirection: 'column',
        gap: 8,
    },
    wlcomeTxt: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    body:{
        marginTop: 50,
        flexDirection: 'column',
        gap: 20,
    },
    input:{
        borderRadius: 10,
        width: 350,
        height: 45, 
        marginTop: 10,
        borderColor: '#a9a9a9',
        borderWidth: 1,
        padding: 9,
        fontSize: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonContainer:{
        backgroundColor: '#28bff1',
        padding: 5,
        color: 'black',
        borderRadius: 10,
        height: 40,      
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginWithButton: {
        backgroundColor: '#dcdcdc',
        flexDirection: 'row',
        gap: 15
    } 


})