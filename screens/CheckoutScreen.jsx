import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderWithArrow from '../components/HeaderWithArrow'
import { TextInput } from 'react-native'
import BlueButton from '../components/BlueButton'
import { useCart } from '../context/CartContext'



const RadioButton = ({ label, isSelected, onPress, imgUrl }) => {
    return (
      <TouchableOpacity style={styles.radioButton} onPress={onPress}>
        <View style={{flexDirection: 'row', gap: 5}}>
            <Image 
                source={{uri: imgUrl}}
                style={{width: 30, height: 30}}
            />
            <Text style={styles.radioLabel}>{label}</Text>
        </View>
        <View style={{height: 24, width: 24, borderRadius: 12, borderColor: '#36d8f5', borderWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
            <View style={[styles.radioCircle, { backgroundColor: isSelected ? '#36d8f5' : 'white' }]} />
        </View>
        
      </TouchableOpacity>
    );
  };

  
const CheckoutScreen = ({route, navigation}) => {
  const {deleteCart} = useCart()
    const {subtotal} = route.params

    const paymentMethods = [
        {label: 'Credit Card', imgUrl:'https://imageio.forbes.com/blogs-images/steveolenski/files/2016/07/Mastercard_new_logo-1200x865.jpg?height=512&width=711&fit=bounds'},
        { label: 'Visa', imgUrl: 'https://w7.pngwing.com/pngs/400/28/png-transparent-credit-card-computer-icons-visa-electron-bank-curio-blue-text-rectangle.png'},
         {label: 'Cash on delivery', imgUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-cash-on-delivery-1851649-1569374.png'}
        ]; 
    const [selectedMethod, setSelectedMethod] = useState(null);

  const handleMethodSelect = (method) => {
    setSelectedMethod(method.label);
  };

  const handleCheckout = () => {
    deleteCart();
    navigation.navigate('Success')
  }
  return (
    <SafeAreaView style={{backgroundColor: '#add8e6', flex:1}}>
      <HeaderWithArrow title='Place your order'/>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <Text style={{padding: 12, color: 'gray'}}>ORDER SUMMARY</Text>
        <View style={styles.borderBox}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                    <Text style={{fontSize: 16}}>Items Total (1)</Text>
                    <Text style={{fontSize: 16}}>Delivery Fees</Text>
                    <Text style={{fontSize: 16, paddingTop: 13}}>Total</Text>
                </View>

                <View>
                    <Text style={{fontSize: 16}}>EGP {subtotal}.00</Text>
                    <Text style={{fontSize: 16}}>EGP 35.00</Text>
                    <Text style={{fontSize: 16, paddingTop: 13}}>EGP { 35.00 + subtotal}.00</Text>
                </View>
            </View>

            <View style={styles.horizontalLine}></View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TextInput placeholder='Enter code here' 
                    style={{ borderWidth: 1, borderRadius: 8, borderColor: 'lightgray', height: 40, width: '70%', padding: 12, fontSize: 16}} 
                />
                <TouchableOpacity>
                    <Text style={{color: 'gray', fontSize: 17}}>APPLY</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={{marginTop: 15}}>
            <Text style={{padding: 12, color: 'gray'}}>PAYMENT METHOD</Text>
            <View style={styles.borderBox}>
                {paymentMethods.map((method) => (
                    <RadioButton
                        key={method.imgUrl}
                        label={method.label}
                        imgUrl={method.imgUrl}
                        isSelected={selectedMethod === method.label}
                        onPress={() => handleMethodSelect(method)}
                    />
                ))}
            </View>
            <BlueButton text='Confirm Order' specialStyles={{alignSelf: 'center', marginTop: 50}} onPress={handleCheckout}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        justifyContent: 'space-between',
      },
      radioCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,        
      },
      radioLabel: {
        fontSize: 16,
      },
      horizontalLine: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 2,
        marginVertical: 10,
      },
      borderBox:{
        borderWidth: 1, 
        borderColor: 'lightgray', 
        marginHorizontal: 2, 
        padding: 10
    }
})