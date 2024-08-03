import React, {useState} from 'react';
import { Button } from 'react-native';
import { getValueFor } from '../utils/SecureStorage';
import { signMessage } from '../utils/WalletService';

const SignMessageButton = ({message, navigation}) => {
  
  const handleSigningMessage = async () => {
    let privateKey = await getValueFor("seedPhrase");
    let signedMessage = await signMessage(message, privateKey);
    console.log("signedMessage", signedMessage);
    navigation.navigate("SignedMessageQR", {signedMessage})
  }

  return (
    <Button 
        title="Sign message"
        onPress={() => handleSigningMessage()}
    />
  );
};

export default SignMessageButton;