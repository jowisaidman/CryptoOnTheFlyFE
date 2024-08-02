import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Screen</Text>
      <Button
        title="Create Wallet"
        onPress={() => navigation.navigate('WalletSetup')}
      />
    <Button
        title="Setup Wallet"
        onPress={() => navigation.navigate('WalletSetup')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default WelcomeScreen;