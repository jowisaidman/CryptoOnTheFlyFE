import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { getValueFor } from '../utils/SecureStorage';
import { signMessage } from '../utils/WalletService';

const SignMessageButton = ({message, navigation, setIsLoading}) => {
    const handleSigningMessage = async () => {
      setIsLoading(true);
      let privateKey = await getValueFor("seedPhrase");
      let signedMessage = await signMessage(message, privateKey);
      console.log("signedMessage", signedMessage);
      setIsLoading(false);
      navigation.navigate("SignedMessageQR", {signedMessage})
    }

    return (
      <TouchableOpacity style={styles.touchOpacityButton} onPress={() => handleSigningMessage()}>
          <Text style={styles.text}>Sign message</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  }
});

export default SignMessageButton;