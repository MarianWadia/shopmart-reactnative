import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { loginStyles } from '../screens/LoginScreen'
import { FontAwesome } from '@expo/vector-icons'; 

const SearchBar = ({setSearchValue, searchValue}) => {
  return (
    <View style={searchStyles.container}>
        <View style={[loginStyles.input, searchStyles.inputField]}>
            <FontAwesome name="search" size={18} color="black" />
            <TextInput placeholder='Search on Shopmart' 
                value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} 
            />
        </View>
    </View>
  )
}

export default SearchBar

const searchStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10
    },
    inputField: {
        backgroundColor: 'white',
        fontSize: 13,
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 15
    }
})

