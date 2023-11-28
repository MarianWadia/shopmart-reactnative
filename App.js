import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <StackNavigator />
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
