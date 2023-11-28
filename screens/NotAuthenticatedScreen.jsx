import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderWithArrow from '../components/HeaderWithArrow'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'; 
import { loginStyles } from './LoginScreen';
import { useNavigation } from '@react-navigation/native' 
import BlueButton from '../components/BlueButton';


const NotAuthenticatedScreen = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={{backgroundColor: 'lightgray'}}>
        <View>
           <HeaderWithArrow title='Checkout' />

            <View style={{backgroundColor: 'lightgray', height: "100%"}}>
                <View style={{paddingVertical: 80, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{backgroundColor: 'white', height: 100, width: 100, borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                    <Feather name="user-x" size={50} color="#02a4da" />    
                    </View>
                    <View style={{padding: 5}}>
                        <Text style={{fontWeight: 'bold', fontSize: 23, textAlign: 'center'}}>Please login to access this account</Text>
                        <Text style={{color: 'gray', fontSize: 18, marginTop: 5, textAlign: 'center'}}>If you are not registered just sign in with your email or facebook account.</Text>
                    </View>
                    
                    <BlueButton text='Login' specialStyles={{marginTop: 30}} onPress={()=>navigation.navigate('Login')}/>
                    
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default NotAuthenticatedScreen

const styles = StyleSheet.create({})