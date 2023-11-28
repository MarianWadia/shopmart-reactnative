import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import  HeaderWithArrow  from '../components/HeaderWithArrow'
import BlueButton from '../components/BlueButton'
import { useCart } from '../context/CartContext'
import RemoveItemModal from '../components/RemoveItemModal'
import { useUser } from '../context/UserContext'

const CartScreen = ({navigation}) => {
  const { currentUser } = useUser();
  const { removeFromCart, cartItems } = useCart()
  const [totalQuantities, setTotalQuantities] = useState(cartItems?.length)
  const [itemQuantity, setItemQuantity] = useState(1)
  const [subtotal, setSubTotal] = useState(0)
  const [isRemoveModalVisible, setRemoveModalVisible] = useState(false);


  useEffect(() => {
    const newSubTotal = cartItems.reduce((acc, item) => acc + (item?.price - (item?.price * (item?.discount / 100)))* itemQuantity, 0) * itemQuantity;
    setSubTotal(newSubTotal);
    setTotalQuantities(cartItems?.length)
  }, [cartItems, itemQuantity, totalQuantities]);

  const handleCheckout = () =>{
    if(!currentUser){
      navigation.navigate('NotAuthenticated')
    }else{
      navigation.navigate('Checkout', {subtotal})
    }
  }
   
  const renderItem = ({item}) =>{
    const increaseQuantity = () => {
      setItemQuantity(itemQuantity+1)
    }

    const decreaseQuantity = () => {
      if(itemQuantity===1){
        setItemQuantity(itemQuantity)
      }else{
        setItemQuantity(itemQuantity-1)
      }
    }

    const onRemoveItem = () => {
      removeFromCart(item)
      setItemQuantity(1)
      setRemoveModalVisible(false);
    }
    return(
      <View style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 12, padding: 12}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 30, padding: 15}}>
          <Image source={{uri: item?.imgUrl}}  style={{width: 100, height: 100}}/>
          <View>
            <Text style={{fontSize: 15, color: 'gray'}}>{item?.name}</Text>
            <Text style={{fontWeight: 'bold'}}>EGP {item?.price * itemQuantity}</Text>
            <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <Text style={{}}>EGP {(item?.price - (item?.price * (item?.discount / 100)))* itemQuantity}</Text>
              <Text style={{backgroundColor: '#b9d5df', padding: 3, borderRadius: 3, color: '#10a6d8'}}>{item?.discount}%</Text></View>
            <Text style={{color: '#8c9497', fontStyle: 'italic'}}>In Stock</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'canter'}}> 
          <TouchableOpacity onPress={() => setRemoveModalVisible(true)} style={{backgroundColor: '#cedce2', padding: 6, borderRadius: 3}}>
            <Text style={{color: '#10a6d8', fontWeight: 'bold', fontSize: 15}}>Remove</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <TouchableOpacity onPress={decreaseQuantity} style={{backgroundColor: itemQuantity ==1 ? '#cde6ee' : '#10a6d8' , padding: 2, borderRadius: 2, width: 30}}>
              <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 22}}>-</Text>
            </TouchableOpacity>
            <Text>{itemQuantity}</Text>
            <TouchableOpacity onPress={increaseQuantity} style={{backgroundColor: '#10a6d8', padding: 2, borderRadius: 2, width: 30}}>
              <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 22}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <RemoveItemModal
            isVisible={isRemoveModalVisible}
            onRemove={onRemoveItem}
            onCancel={()=>setRemoveModalVisible(false)}
          />
      </View>

    )
  }

  return (
    <SafeAreaView style={{backgroundColor: '#add8e6', flex: 1}}>
      <HeaderWithArrow title='Cart' />
      <View style={{backgroundColor: 'white', height: '100%'}}>

        {cartItems.length > 0 ? (
          <View>
            <Text style={{marginTop: 10, marginBottom: 5, paddingLeft: 5, color: 'gray', fontWeight: 'bold'}}>CART SUMMARY</Text>
    
            <View style={{flexDirection: 'row', backgroundColor: 'lightgray', justifyContent: 'space-between', alignItems: 'center', padding: 8}}>
              <Text>Subtotal</Text>
              <Text>EGP {subtotal}</Text>
            </View>
    
            <Text style={{paddingHorizontal: 15, paddingTop: 15, color: 'gray', fontWeight: 'bold'}}>{`CART (${totalQuantities})`}</Text>
            <FlatList 
            renderItem={renderItem}
            data={cartItems}
            numColumns={1}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            />
            <BlueButton text={`CHECKOUT (EGP ${subtotal})`} specialStyles={{alignSelf: 'center'}} onPress={handleCheckout}/>
          </View>
        ) : (<Text style={{textAlign: 'center', marginTop: 45, fontSize: 20, color: '#10a6d8'}}>No Items Found In the Cart</Text>)}
      </View>
    </SafeAreaView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 1,
    padding: 10,
    gap: 10
  }
})