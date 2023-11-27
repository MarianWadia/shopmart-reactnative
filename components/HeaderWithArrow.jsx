import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native"

const HeaderWithArrow = ({title}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <AntDesign name="arrowleft" size={15} color="white"/>
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 17}}>{title}</Text>
    </View>
  )
}

export default HeaderWithArrow

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'gray',
        width: '100%',
        height: 40,
        padding: 10,
        flexDirection : 'row',
        gap: 10,
        alignItems: 'center',
        alignContent: 'center',

    }
})