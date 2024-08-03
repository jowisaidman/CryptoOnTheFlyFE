import React from 'react';
import { Button } from 'react-native';
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
        <Button 
            title="Sign message"
            onPress={() => handleSigningMessage()}
        />
    );
};

export default SignMessageButton;