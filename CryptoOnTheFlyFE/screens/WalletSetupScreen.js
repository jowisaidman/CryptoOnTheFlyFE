import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SeedPhraseMenu from '../components/SeedPhrase/SeedPhraseMenu';

const WalletSetupScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wallet Setup</Text>
      <SeedPhraseMenu seedSource={route.params.seedSource}/>
      <Button
        title="Back"
        onPress={() => navigation.navigate('Welcome')}
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

export default WalletSetupScreen;