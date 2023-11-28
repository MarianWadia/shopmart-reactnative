import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'
import { useUser } from '../context/UserContext';
import { useCart } from '../context/CartContext';

const AccountScreen = () => {
    const {deleteCart} = useCart()
    const { signout, currentUser } = useUser();
    const navigation = useNavigation()

    const handleSignout = () => {
        deleteCart();
        signout();
        navigation.navigate('Login')
      };
    
  return (
    <SafeAreaView style={{backgroundColor: '#add8e6', flex: 1}}>
        <View>
            <View style={styles.headerContainer}>
                <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Account</Text>
                <View style={{marginTop: 10}}>
                    <Text style={{color: '#02a4da', fontSize: 18 }}>Welcome {currentUser?.email}</Text>
                    <Text style={{color: 'white'}}>{currentUser?.email}</Text>
                </View>
            </View>

            <View style={{backgroundColor: 'lightgray', height: '100%' }}>

                {/* MY ACCOUNT PART */}
                <View style={{padding:20}}>
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

                 {/* MY SETTINGS PART */}
                <View style={{padding: 20}}>
                    <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 18}}>MY SETTINGS</Text>
                    <View style={{backgroundColor: 'white', padding: 15, marginTop: 15, gap: 20}}>
                        <TouchableOpacity style={styles.rowItem}>
                            <Text style={{fontSize: 15}}>Adress Book</Text>
                            <FontAwesome name="angle-right" size={24} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.rowItem} onPress={() => navigation.navigate('NotAuthenticated')}>
                            <Text style={{fontSize: 15}}>Account Management</Text>
                            <FontAwesome name="angle-right" size={24} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.rowItem} onPress={handleSignout}>
                            <Text style={{fontSize: 15}}>Sign out</Text>
                            <FontAwesome name="angle-right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
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