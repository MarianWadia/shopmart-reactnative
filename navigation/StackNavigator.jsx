import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashScreen';
import AccountScreen from '../screens/AccountScreen';
import InboxScreen from '../screens/InboxScreen';
import CategoriesScreen from '../screens/CategoriesScreen';


const StackNavigator = () => {
    const Stack = createNativeStackNavigator()
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Account' component={AccountScreen} options={{headerShown: false}} />
        <Stack.Screen name='Inbox' component={InboxScreen} options={{headerShown: false}} />
        <Stack.Screen name='Categories' component={CategoriesScreen} options={{headerShown: false}} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})