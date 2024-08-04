
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { getWalletAddress, getWalletAlias } from '../utils/WalletService';

const QRWalletAddressScreen = ({ navigation }) => {
    const [shortenedWalletAddress, setShortenedWalletAddress] = useState(null);
    const [walletAddress, setWalletAddress] = useState(null);

    useEffect(() => {
        async function obtainWalletAddress() {
            const wallet = await getWalletAddress();
            console.log("Wallet: ", wallet);
            const shortAddress = getWalletAlias(wallet);
            setShortenedWalletAddress(shortAddress);
            setWalletAddress(wallet)
        }
        obtainWalletAddress();
    }, []); 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wallet address</Text>
            {walletAddress ?
                <View style={styles.qrView}>
                    <Text style={styles.walletText}>{shortenedWalletAddress}</Text>
                    <QRCode value={walletAddress} size={300} /> 
                    <View style={styles.div}/>
                </View>
            : null}
            <TouchableOpacity style={styles.touchOpacityButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.text}>Done</Text>
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
    qrView: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: '100%'
    },
    walletText: {
        fontSize: 16,
        fontWeight: 'bold',
        //color: '#FDFEFF',
        marginBottom: '5%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FDFEFF',
        marginBottom: '10%',
    },
    touchOpacityButton: {
        marginTop: 25,
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
    },
    div: {
      height: 15
    }
});

export default QRWalletAddressScreen;