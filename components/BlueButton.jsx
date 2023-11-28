import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BlueButton = ({onPress, specialStyles, text, textColor}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, specialStyles && specialStyles ]} onPress={onPress ? onPress : ()=>{}}>
        <Text style={{color: textColor ? textColor : "white", fontSize: 15}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default BlueButton

const styles = StyleSheet.create({
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
})