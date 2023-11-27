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
import AfterLoginVerifyScreen from '../screens/AfterLoginVerifyScreen';
import AfterRegisterVerifyScreen from '../screens/AfterRegisterVerifyScreen';
import HomeScreen from '../screens/HomeScreen';
import NotAuthenticatedScreen from '../screens/NotAuthenticatedScreen';


const StackNavigator = () => {
    const Stack = createNativeStackNavigator()
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Register' component={RegisterScreen} options={{title: ''}}/>
        <Stack.Screen name='Account' component={AccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Inbox' component={InboxScreen} options={{headerShown: false}} />
        <Stack.Screen name='Categories' component={CategoriesScreen} options={{headerShown: false}} />
        <Stack.Screen name='AfterLogin' component={AfterLoginVerifyScreen} options={{title: ''}} />
        <Stack.Screen name='AfterRegister' component={AfterRegisterVerifyScreen} options={{title: ''}} />
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name='NotAuthenticated' component={NotAuthenticatedScreen} options={{headerShown: false}} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})