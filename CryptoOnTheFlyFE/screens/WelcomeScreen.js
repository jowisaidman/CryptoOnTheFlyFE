import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getValueFor} from '../utils/SecureStorage';

const WelcomeScreen = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
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
      <View style={styles.buttonContainer}>
        <Button
          title="Create Wallet"
          style={styles.button}
          onPress={() => navigation.navigate('WalletSetup', { seedSource: 'create' })}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Import Wallet"
          style={styles.button}
          onPress={() => navigation.navigate('WalletSetup', { seedSource: 'import' })}
        />
      </View>
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
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FDFEFF',
      marginBottom: '25%',
    },
    buttonContainer: {
      marginBottom: 25,
      width: '80%',
    },
    button: {
      color: '#2bfaff',
      backgroundColor: '#2bfaff',
    },
  });

  
export default WelcomeScreen;