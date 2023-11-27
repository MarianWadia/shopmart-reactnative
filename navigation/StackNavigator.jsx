import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
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
import { Feather } from '@expo/vector-icons'; 
import CartScreen from '../screens/CartScreen';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 


const StackNavigator = () => {
    const Stack = createNativeStackNavigator()
    const Tab = createBottomTabNavigator()

    const BottomTabs = ()=>{
      return(
        <Tab.Navigator>
          <Tab.Screen 
            name='Home'
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              tabBarLabelStyle: {color: '#02a4da'},
              headerShown: false,
              tabBarIcon: ({focused})=>
                focused ? (<Feather name="home" size={24} color="#02a4da" />):(<Feather name="home" size={24} color="lightgray" />)
            }}
          />

          <Tab.Screen 
            name='Cart'
            component={CartScreen}
            options={{
              tabBarLabel: "Cart",
              tabBarLabelStyle: {color: '#02a4da'},
              headerShown: false,
              tabBarIcon: ({focused})=>
                focused ? (<AntDesign name="shoppingcart" size={24} color="#02a4da" />):(<AntDesign name="shoppingcart" size={24} color="lightgray" />)
            }}
          />

          <Tab.Screen 
            name='Account'
            component={AccountScreen}
            options={{
              tabBarLabel: "Account",
              tabBarLabelStyle: {color: '#02a4da'},
              headerShown: false,
              tabBarIcon: ({focused})=>
                focused ? (<FontAwesome5 name="user" size={24} color="#02a4da" />):(<FontAwesome5 name="user" size={24} color="lightgray" />)
            }}
          />
          <Tab.Screen 
            name='Categories'
            component={CategoriesScreen}
            options={{
              tabBarLabel: "Categories",
              tabBarLabelStyle: {color: '#02a4da'},
              headerShown: false,
              tabBarIcon: ({focused})=>
                focused ? (<SimpleLineIcons name="list" size={24} color="#02a4da" />):(<SimpleLineIcons name="list" size={24}  color="lightgray" />)
            }}
          />
          
        </Tab.Navigator>
      )
    }
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Register' component={RegisterScreen} options={{title: ''}}/>
        <Stack.Screen name='Main' component={BottomTabs} options={{ headerShown: false }} />
        {/* <Stack.Screen name='Account' component={AccountScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen name='Inbox' component={InboxScreen} options={{headerShown: false}} />
        {/* <Stack.Screen name='Categories' component={CategoriesScreen} options={{headerShown: false}} /> */}
        <Stack.Screen name='AfterLogin' component={AfterLoginVerifyScreen} options={{title: ''}} />
        <Stack.Screen name='AfterRegister' component={AfterRegisterVerifyScreen} options={{title: ''}} />
        {/* <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} /> */}
        <Stack.Screen name='NotAuthenticated' component={NotAuthenticatedScreen} options={{headerShown: false}} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})