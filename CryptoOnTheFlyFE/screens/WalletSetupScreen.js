import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SeedPhraseMenu from '../components/SeedPhrase/SeedPhraseMenu';
import ContinueSetupWalletButton from '../components/ContinueSetupWalletButton';
import Loading from '../components/Loader';
import { createNewSeedPhrase, getWalletAddress } from '../utils/WalletService';
import { getValueFor } from '../utils/SecureStorage';

const WalletSetupScreen = ({ route, navigation }) => {
    const [wallet, setWallet] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(async () => {
            if (route.params.seedSource === 'create') {
                //const walletDetails = createNewSeedPhrase(); // If we want to create new wallets on each init
                const mnemonic = await getValueFor("seedPhrase");
                let walletDetails = {
                    wallet: getWalletAddress(),
                    mnemonic
                }
                walletDetails.mnemonic = walletDetails.mnemonic.split(" ");
                setWallet(walletDetails);
                setIsLoading(false);
            }
            setIsLoading(false);
        }, 250)
    }, []); 

    if (isLoading) {
        return <Loading text="Creating seed phrase"/>
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Wallet Setup</Text>
                {route.params.seedSource === 'import' ? 
                    <Text style={styles.importText}>Insert the each word in the corresponding placeholder</Text> 
                    : 
                    <Text style={styles.importText}>This is your secret phrase, write it down in a secure place!</Text>}
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
    backgroundColor: '#1A1733',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FDFEFF',
    marginBottom: '15%',
  },
  importText: {
    fontSize: 16,
    color: '#FDFEFF',
    marginBottom: '5%',
    textAlign: 'center',
  },
});

export default WalletSetupScreen;