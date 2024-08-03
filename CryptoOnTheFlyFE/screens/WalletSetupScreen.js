import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SeedPhraseMenu from '../components/SeedPhrase/SeedPhraseMenu';
import ContinueSetupWalletButton from '../components/ContinueSetupWalletButton';

const WalletSetupScreen = ({ route, navigation }) => {
  const [wallet, setWallet] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wallet Setup</Text>
      <SeedPhraseMenu seedSource={route.params.seedSource} wallet={wallet} setWallet={setWallet}/>
      <ContinueSetupWalletButton seedPhrase={wallet ? wallet.mnemonic.join(' ') : wallet} navigation={navigation}/>
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