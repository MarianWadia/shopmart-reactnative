import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 1000); // 10 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.appName}>SHOPMART</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#add8e6',
  },
  logo: {
    width: 220,
    height: 220,
    borderRadius: 150,
    backgroundColor: "#87ceeb",
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: "center"
  },
});

export default SplashScreen;
