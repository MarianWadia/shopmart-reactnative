import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/SearchBar'

const CategoriesScreen = () => {
    const [searchValue, setSearchValue] = useState('')

    const categories = [
        {
            label: 'Electronics',
            imgUrl: 'https://jooinn.com/images/electronic-device-1.jpg', 
        },
        {
            label: 'Fashion & Beauty',
            imgUrl: 'https://jooinn.com/images/electronic-device-1.jpg', 
        },
        {
            label: 'Groceries & Drink',
            imgUrl: 'https://jooinn.com/images/electronic-device-1.jpg', 
        },
        {
            label: 'Personal Care',
            imgUrl: 'https://jooinn.com/images/electronic-device-1.jpg', 
        },
        {
            label: 'Pets',
            imgUrl: 'https://jooinn.com/images/electronic-device-1.jpg', 
        },
        {
            label: 'Sports & Gym',
            imgUrl: 'https://jooinn.com/images/electronic-device-1.jpg', 
        },
    ]

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item}>
           <Text style={{fontSize: 15, fontWeight: 'bold'}}>{item.label}</Text>
            <View style={{marginTop: 10, borderRadius: 15}}>
                <Image 
                    source={{uri: item.imgUrl}}
                    style={styles.img}
                />
            </View>
        </TouchableOpacity>
      );
  return (
    
    <SafeAreaView style={{backgroundColor: '#add8e6'}}>
        <SearchBar setSearchValue={setSearchValue} searchValue={searchValue}/>
        <FlatList 
            data={categories}
            renderItem={renderItem}
            keyExtractor={(category) => category.label}
            numColumns={2}
            contentContainerStyle={styles.container}
        />
    </SafeAreaView>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white', 
        height: '100%',
        marginTop: 20,
        padding: 10
    },
    item: {
        flex: 1,
        margin: 8,
        padding: 1,
        justifyContent: 'flex-start',
      },
      img:{
        width: 170, 
        height: 190, 
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'lightgray'
    }
})