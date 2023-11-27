import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/SearchBar'
import { EvilIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { categories } from '../data/catrgories';


const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState('')

  const items = [
    {
      id: '1',
      name: 'White Shirt',
      discount: 70,
      price: 600,
 
      imgUrl: 'https://i.pinimg.com/236x/64/c7/00/64c7003c37a03965309eea883d7a06c6.jpg'
    },
    {
      id: '2',
      name: 'Black Adidas Sneakers',
      discount: 50,
      price: 4500,

      imgUrl: 'https://i.pinimg.com/236x/d9/4e/cd/d94ecde3f01a7659566b4fa6214263fa.jpg'
    },
    {
      id: '3',
      name: 'Green Top',
      discount: 25,
      price: 350,
      imgUrl: 'https://i.pinimg.com/236x/e6/2c/a1/e62ca158b6ac9bff543ca1d963db8ed1.jpg'
    },
    {
      id: '4',
      name: 'Iphone 13',
      discount: 20,
      price: 45000,

      imgUrl: 'https://i.pinimg.com/236x/5d/c0/cf/5dc0cf0585fc6242d92b643c54f30476.jpg'
    },
  ]

    const renderCategoryItem = ({ item }) => (
      <TouchableOpacity style={styles.categoryItem}>
        <Image source={{uri: item.imgUrl}} style={styles.categoryImage} />
        <Text style={styles.categoryLabel}>{item.label}</Text>
      </TouchableOpacity>
    );

    const handleAddToCart = (itemId) => {
      // Implement your "Add to Cart" logic here
      console.log(`Added item ${itemId} to cart`);
    };
  
    const renderShoppingItem = ({ item }) => (
      <View style={styles.itemContainer}>
        <View style={{alignSelf: 'flex-end', backgroundColor: '#c7e7f1', padding: 3, borderRadius: 3}}>
          <Text style={{textAlign: 'right', color: '#10a6d8'}}>{item.discount? `${item.discount}%` : ''}</Text>
        </View>     
        <Image source={{uri: item.imgUrl}} style={styles.itemImage} />
        <Text style={styles.itemLabel}>{item.name}</Text>
        <Text style={styles.itemLabel}>{item.price}$</Text>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => handleAddToCart(item.id)}
        >
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  

  return (
    <SafeAreaView style={{backgroundColor: '#add8e6', flexGrow: 1}}>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

      <TouchableOpacity style={{flexDirection: 'row', gap: 10, backgroundColor: '#7eb2c4', padding: 20, marginTop: 5, alignItems: 'center'}}>
        <EvilIcons name="location" size={34} color="black" />
        <Text style={{fontSize: 18}}>Deliver to Mokatem - Cairo</Text>
        <AntDesign name="down" size={18} color="black" />
      </TouchableOpacity>

      
      {/* Categories Circles list */}
      <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.label}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryList}
    />

      {/* Banner */}
        <Image 
          source={{uri: 'https://th.bing.com/th/id/OIP.CPOThO3-HietYkmTBwkNhwHaDt?rs=1&pid=ImgDetMain'}}
          style={{width: '100%', height: 200, marginTop: -280}}
        />

      {/* Shopping Items */}
      <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingTop: 10, justifyContent: 'space-between', backgroundColor: 'white'}}>
        <Text style={{ fontSize: 25, fontWeight: 'bold'}}>Start Shopping For</Text>
        <TouchableOpacity>
          <Text style={{color:'#14c6cc', fontSize: 15}}>See All</Text>
        </TouchableOpacity>
        
      </View>
      
      <View style={{flexGrow: 1, backgroundColor: 'white', flex: 1}}>
        <FlatList
        data={items}
        renderItem={renderShoppingItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}

      />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  categoryList: {
    // alignItems: 'center',
    justifyContent:'center',
    paddingVertical: 10,
    height: 100,
    backgroundColor: 'white'
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30, // Make it a circle
    marginBottom: 5,
  },
  categoryLabel: {
    fontSize: 12,
  },
  listContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    padding: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  itemLabel: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
})