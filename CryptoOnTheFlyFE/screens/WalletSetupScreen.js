import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SeedPhraseMenu from '../components/SeedPhrase/SeedPhraseMenu';
import ContinueSetupWalletButton from '../components/ContinueSetupWalletButton';
import Loading from '../components/Loader';
import { createNewSeedPhrase } from '../utils/WalletService';

const WalletSetupScreen = ({ route, navigation }) => {
    const [wallet, setWallet] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            if (route.params.seedSource === 'create') {
            const walletDetails = createNewSeedPhrase();
            walletDetails.mnemonic = walletDetails.mnemonic.split(" ");
            setWallet(walletDetails);
            setIsLoading(false);
            }
        }, 250)
    }, []); 

    if (isLoading) {
        return <Loading text="Creating seed phrase"/>
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Wallet Setup</Text>
                <SeedPhraseMenu wallet={wallet} />
                <ContinueSetupWalletButton seedPhrase={wallet ? wallet.mnemonic.join(' ') : wallet} navigation={navigation}/>
            </View>
        );
    }
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