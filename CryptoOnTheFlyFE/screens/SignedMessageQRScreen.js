
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const SignedMessageQRScreen = ({ route, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.signedText}>This is your signed message, scan it from your plugin</Text>
            <View style={styles.qrView}>
                <QRCode value={route.params.signedMessage} size={300}/>
            </View>
            <TouchableOpacity style={styles.touchOpacityButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.text}>Go to home</Text>
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
    signedText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FDFEFF',
        marginBottom: '5%',
        textAlign: 'center'
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
    qrView: {
        flex: 0.55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: '100%'
    }
});

export default SignedMessageQRScreen;