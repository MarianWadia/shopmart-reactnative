import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const VerificationInputs = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
      };
    
      const handleBlur = () => {
        setIsFocused(false);
      };

  return (
    <View>
      <TextInput style={[styles.inputs, {borderColor: isFocused ? '#28bff1': 'lightgray'}]} onFocus={handleFocus} onBlur={handleBlur}/>
    </View>
  )
}

export default VerificationInputs

const styles = StyleSheet.create({
    inputs:{
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        fontSize: 20,
        textAlign: 'center',
        borderWidth: 1.5
    }

})