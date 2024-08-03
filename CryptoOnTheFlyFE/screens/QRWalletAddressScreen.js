
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { getWalletAddress } from '../utils/WalletService';

const QRWalletAddressScreen = ({ navigation }) => {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    async function obtainWalletAddress() {
        const wallet = await getWalletAddress();
        setWalletAddress(wallet)
    }
    obtainWalletAddress();
  }, []); 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wallet address</Text>
      {walletAddress ?
        <View style={styles.qrView}>
          <Text style={styles.walletText}>{walletAddress}</Text>
          <QRCode value={walletAddress} size={300} /> 
        </View>
      : null}
      <Button title="Done" onPress={() => navigation.navigate('Home')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrView: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  walletText: {
    fontSize: 14,
    marginBottom: 20,
  },
  text: {
    fontSize: 22,
    marginBottom: 80,
  },
});

export default QRWalletAddressScreen;