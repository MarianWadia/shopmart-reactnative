import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons'; 


const RemoveItemModal = ({ isVisible, onRemove, onCancel }) => {
  return (
    <Modal isVisible={isVisible} animationIn="slideInUp" animationOut="slideOutDown">
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20, height: 250}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 24}}>Remove From Cart</Text>
                <TouchableOpacity onPress={onCancel}>
                    <AntDesign name="close" size={20} color="black" />
                </TouchableOpacity>
            </View>
          <Text style={{textAlign: 'center', color: 'gray', fontSize: 18, paddingVertical: 12}}>Do you really want to remove this item from the cart?</Text>
          <View style={{justifyContent: 'center', alignItems: 'center', margin: 20, gap: 12}}>
            <TouchableOpacity 
                style={{flexDirection: 'row', alignItems: 'center', gap: 15, 
                    borderColor: '#22bbee', borderWidth: 2, padding: 10, width: '90%', justifyContent: 'center'}}
            >
                <AntDesign name="hearto" size={24} color="#10a6d8" />
                <Text style={{fontSize: 20, color: "#10a6d8"}}>Save For Later</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onRemove} style={{flexDirection: 'row', alignItems: 'center', gap: 15, 
                    backgroundColor: '#22bbee', padding: 10, width: '90%', justifyContent: 'center'}} >
                <AntDesign name="delete" size={24} color="white" />
                <Text style={{fontSize: 20, color: "white"}}>Remove from Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RemoveItemModal;
