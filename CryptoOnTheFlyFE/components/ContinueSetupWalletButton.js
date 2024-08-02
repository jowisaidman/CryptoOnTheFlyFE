import React from 'react';
import { Button, StyleSheet } from 'react-native';

const ContinueSetupWalletButton = ({seedPhrase, navigation}) => {
  
  const handleContinue = () => {
    navigation.navigate('Welcome')
  }

  return (
    <Button 
        title="Continue"
        onPress={() => handleContinue()}
    />
  );
};

const styles = StyleSheet.create({ //TODO
});

export default ContinueSetupWalletButton;