
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { getWalletAddress, getWalletAlias } from '../utils/WalletService';

const QRWalletAddressScreen = ({ navigation }) => {
    const [walletAddress, setWalletAddress] = useState(null);

    useEffect(() => {
        async function obtainWalletAddress() {
            const wallet = await getWalletAddress();
            const shortenedAddress = getWalletAlias(wallet);
            setWalletAddress(shortenedAddress)
        }
        obtainWalletAddress();
    }, []); 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wallet address</Text>
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
        backgroundColor: '#1A1733',
    },
    qrView: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    walletText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FDFEFF',
        marginBottom: '5%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FDFEFF',
        marginBottom: '10%',
    },
});

export default QRWalletAddressScreen;