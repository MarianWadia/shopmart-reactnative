import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderWithArrow from '../components/HeaderWithArrow'
import { AntDesign } from '@expo/vector-icons'; 
import BlueButton from '../components/BlueButton';


const SuccessScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#add8e6', flex:1}}>
      <HeaderWithArrow title='Success'/>
      <View style={{backgroundColor: 'lightgray', height: '100%', justifyContent: 'flex-end'}}>
        <View style={{backgroundColor: 'white', height: "70%", width: '100%', alignItems: 'center'}}>
          <View style={{marginTop: 30, alignItems: 'center', padding: 35}}>
            <View style={{backgroundColor: '#36d8f5', height: 100, width: 100, borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                <AntDesign name="check" size={50} color="white" />    
            </View>
            <Text style={{fontSize: 35, textAlign: 'center', color: 'gray', marginTop: 20}}>Thank You For Your Order</Text>
            <Text style={{fontSize: 20, textAlign: 'center', color: 'gray', marginTop: 5}}>
              Your order has been placed successfully you can track your, adipisicing elit. Veritatis, esse! 
            </Text>
            <BlueButton 
                text='Back Home' 
                specialStyles={{backgroundColor:'white', marginTop:40, borderColor: 'lightgray', borderWidth: 1}} 
                textColor='gray'
                onPress={()=>{navigation.navigate('Home')}}
              />
            <BlueButton text='Track Your Order' specialStyles={{marginVertical: 20}} />
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default SuccessScreen

const styles = StyleSheet.create({})