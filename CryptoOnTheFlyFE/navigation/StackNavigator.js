import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WalletSetupScreen from '../screens/WalletSetupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import ScanQRScreen from '../screens/ScanQRScreen';
import SignMessageScreen from '../screens/SignMessageScreen';
import SignedMessageQRScreen from '../screens/SignedMessageQRScreen';
import QRWalletAddressScreen from '../screens/QRWalletAddressScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerStyle: { backgroundColor: '#1D1A3B' }, headerTintColor: '#FDFEFF' }} />
        <Stack.Screen name="WalletSetup" component={WalletSetupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ScanQR" component={ScanQRScreen} />
        <Stack.Screen name="SignMessage" component={SignMessageScreen} />
        <Stack.Screen name="SignedMessageQR" component={SignedMessageQRScreen} />
        <Stack.Screen name="QRWalletAddress" component={QRWalletAddressScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    background: '#1A1733',
    color: '#1A1733'
  },
});

export default StackNavigator;