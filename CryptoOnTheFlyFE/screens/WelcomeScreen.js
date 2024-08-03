import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getValueFor} from '../utils/SecureStorage';

const WelcomeScreen = ({ navigation }) => {

  useEffect(() => {
    async function checkSeedPhrase() {
        let seedPhrase = await getValueFor("seedPhrase");
        if (seedPhrase) {
            navigation.navigate("Home");
        }
    }
    checkSeedPhrase();
  }, []); 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Screen</Text>
      <Button
        title="Create Wallet"
        onPress={() => navigation.navigate('WalletSetup', {seedSource: 'create'})}
      />
    <Button
        title="Import Wallet"
        onPress={() => navigation.navigate('WalletSetup', {seedSource: 'import'})}
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