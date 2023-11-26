import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'

const AccountScreen = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={{backgroundColor: '#add8e6'}}>
        <View style={{backgroundColor: 'lightgray', height: "100%"}}>
            <View style={styles.headerContainer}>
                <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Account</Text>
                <View style={{marginTop: 10}}>
                    <Text style={{color: '#02a4da', fontSize: 18 }}>Welcome Nura!</Text>
                    <Text style={{color: 'white'}}>nuraahmed@gamil.com</Text>
                </View>
            </View>

            <View style={{marginTop: 20, paddingHorizontal: 20}}>
                <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 18}}>MY ACCOUNT</Text>
                <View style={{backgroundColor: 'white', padding: 15, marginTop: 15, gap: 20}}>
                    <TouchableOpacity style={styles.rowItem}>
                        <View style={styles.iconWithTitle}>
                            <SimpleLineIcons name="basket" size={24} color="black" />
                            <Text style={{fontSize: 15}}>Orders</Text>
                        </View>
                        <FontAwesome name="angle-right" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rowItem} onPress={() => navigation.navigate('Inbox')}>
                         <View style={styles.iconWithTitle}>
                            <Feather name="inbox" size={24} color="black" />
                            <Text style={{fontSize: 15}}>Inbox</Text>
                        </View>
                        <FontAwesome name="angle-right" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rowItem}>
                        <View style={styles.iconWithTitle}>
                            <AntDesign name="hearto" size={24} color="black" />
                            <Text style={{fontSize: 15}}>Saved Items</Text>
                        </View>
                        <FontAwesome name="angle-right" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{marginTop: 20, paddingHorizontal: 20}}>
                <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 18}}>MY SETTINGS</Text>
                <View style={{backgroundColor: 'white', padding: 15, marginTop: 15, gap: 20}}>
                    <TouchableOpacity style={styles.rowItem}>
                        <Text style={{fontSize: 15}}>Adress Book</Text>
                        <FontAwesome name="angle-right" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rowItem}>
                        <Text style={{fontSize: 15}}>Account Management</Text>
                        <FontAwesome name="angle-right" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rowItem} onPress={() => navigation.navigate('Login')}>
                        <Text style={{fontSize: 15}}>Sign out</Text>
                        <FontAwesome name="angle-right" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'gray',
        width: '100%',
        height: 100,
        padding: 10
    }, 
    rowItem: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    iconWithTitle: {
        flexDirection: 'row', 
        gap: 10, 
        alignItems: 'center'
    }
})