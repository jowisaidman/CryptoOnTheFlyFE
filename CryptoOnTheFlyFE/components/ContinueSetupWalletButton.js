import React from 'react';
import { Button } from 'react-native';
import { save } from '../utils/SecureStorage';

const ContinueSetupWalletButton = ({seedPhrase, navigation}) => {
  
  const handleContinue = async () => {
    await save("seedPhrase", seedPhrase);
    navigation.navigate('Home');
  }

  return (
    <Button 
        title="Continue"
        onPress={() => handleContinue()}
    />
  );
};

export default ContinueSetupWalletButton;