import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { getValueFor} from '../utils/SecureStorage';

const WelcomeScreen = ({ navigation }) => {

    useEffect(() => {
    async function checkSeedPhrase() {
        let seedPhrase = await getValueFor("seedPhrase");
        if (seedPhrase) {
            console.log("Seed phrase: ", seedPhrase);
            navigation.navigate("Home");
        }
    }
    checkSeedPhrase();
  }, []); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add your wallet</Text>
      <TouchableOpacity style={styles.touchOpacityButton} onPress={() => navigation.navigate('WalletSetup', { seedSource: 'create' })}>
        <Text style={styles.text}>Create Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOpacityButton} onPress={() => navigation.navigate('WalletSetup', { seedSource: 'import' })}>
        <Text style={styles.text}>Import Wallet</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1A1733',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#FDFEFF',
      marginBottom: '25%',
    },
    touchOpacityButton: {
        marginBottom: 25,
        width: '80%',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#116466',
        borderRadius: 10
    },
    text: {
        color: "#FFFFFF",
        fontWeight: 'bold',
        fontSize: 16
    }
});

  
export default WelcomeScreen;