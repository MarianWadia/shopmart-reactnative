import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native"
import { FontAwesome } from '@expo/vector-icons'; 
import HeaderWithArrow from '../components/HeaderWithArrow';



const InboxScreen = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={{backgroundColor: '#add8e6', flex:1}}>
        <View>
           <HeaderWithArrow title='Inbox'/>
            
            <View style={{backgroundColor: 'lightgray', height: "100%"}}>
                <View style={{paddingVertical: 80, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{backgroundColor: 'white', height: 100, width: 100, borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesome name="envelope-open" size={50} color="#02a4da" />    
                    </View>
                    <View style={{padding: 5}}>
                        <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>You don't have any messages</Text>
                        <Text style={{color: 'gray', fontSize: 18, marginTop: 5, textAlign: 'center'}}>Here you will be able to see all the messages that we sent you. stay tuned!</Text>
                    </View>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default InboxScreen

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