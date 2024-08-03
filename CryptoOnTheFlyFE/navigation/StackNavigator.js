import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WalletSetupScreen from '../screens/WalletSetupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import ScanQRScreen from '../screens/ScanQRScreen';
import SignMessageScreen from '../screens/SignMessageScreen';
import SignedMessageQRScreen from '../screens/SignedMessageQRScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="WalletSetup" component={WalletSetupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ScanQR" component={ScanQRScreen} />
        <Stack.Screen name="SignMessage" component={SignMessageScreen} />
        <Stack.Screen name="SignedMessageQR" component={SignedMessageQRScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;