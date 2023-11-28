import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <CartProvider>
        <StackNavigator />
      </CartProvider>
    </UserProvider>
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
