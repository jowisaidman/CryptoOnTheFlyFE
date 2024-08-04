import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { getWalletAddress, getWalletAlias } from '../utils/WalletService';

const HomeScreen = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        const address = await getWalletAddress();
        const shortenedAddress = getWalletAlias(address);
        setWalletAddress(shortenedAddress);
        setHasPermission(status === 'granted');
    })();
    }, []);

    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text style={styles.permissionText}>Requesting for camera permission</Text>
            </View>
        )
    }
    if (hasPermission === false) {
        <View style={styles.container}>
            <Text style={styles.permissionText}>No access to camera, please give permissions in settings</Text>
        </View>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <Text style={styles.walletText}>Signed Wallet:   {walletAddress}</Text>
            <TouchableOpacity style={styles.touchOpacityButton} onPress={() => navigation.navigate("QRWalletAddress")}>
                <Text style={styles.touchOpacityText}>Sync wallet with plugin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchOpacityButton} onPress={() => navigation.navigate('ScanQR')}>
                <Text style={styles.touchOpacityText}>Scan QR</Text>
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
        marginBottom: '20%',
    },
    walletText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FDFEFF',
        marginBottom: '5%',
    },
    permissionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FDFEFF',
        marginBottom: '5%',
    },
    touchOpacityButton: {
        marginTop: 25,
        width: '80%',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#116466',
        borderRadius: 10
    },
    touchOpacityText: {
        color: "#FFFFFF",
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default HomeScreen;