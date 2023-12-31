import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/SearchBar'
import { categories } from '../data/catrgories'

const CategoriesScreen = () => {
    const [searchValue, setSearchValue] = React.useState('')


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
    
    <SafeAreaView style={{backgroundColor: '#add8e6', flex: 1}}>
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