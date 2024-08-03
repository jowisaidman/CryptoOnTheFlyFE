
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const SignedMessageQRScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is your signed message, scan it from your plugin</Text>
      <QRCode value={route.params.signedMessage} size={300} />
      <Button title="Go to home" onPress={() => navigation.navigate('Home')}/>
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
    fontSize: 16,
    marginBottom: 100,
  },
});

export default SignedMessageQRScreen;