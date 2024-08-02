import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import RowSeedPhraseMenu from './RowSeedPhraseMenu';
import { createNewSeedPhrase } from '../../utils/SeedServiceHandler';

const SeedPhraseMenu = ({seedSource}) => {

    const [wallet, setWallet] = useState({
        address: '',
        privateKey: '',
        mnemonic: '',
    });

    useEffect(() => {
        const walletDetails = createNewSeedPhrase();
        console.log('Address:', walletDetails.address);
        console.log('Private Key:', walletDetails.privateKey);
        console.log('Mnemonic:', walletDetails.mnemonic);
        setWallet(walletDetails);
    }, []); 

  console.log("Seed source: ", seedSource)
  return (
    <View style={styles.container}>
      <RowSeedPhraseMenu
        firstInput={{textPlaceholder: "Word 1", textValue: null }}
        secondInput={{textPlaceholder: "Word 2", textValue: null }}
        thirdInput={{textPlaceholder: "Word 3", textValue: null }}
      />
      <RowSeedPhraseMenu
        firstInput={{textPlaceholder: "Word 4", textValue: null }}
        secondInput={{textPlaceholder: "Word 5", textValue: null }}
        thirdInput={{textPlaceholder: "Word 6", textValue: null }}
      />
      <RowSeedPhraseMenu
        firstInput={{textPlaceholder: "Word 7", textValue: null }}
        secondInput={{textPlaceholder: "Word 8", textValue: null }}
        thirdInput={{textPlaceholder: "Word 9", textValue: null }}
      />
      <RowSeedPhraseMenu
        firstInput={{textPlaceholder: "Word 10", textValue: null }}
        secondInput={{textPlaceholder: "Word 11", textValue: null }}
        thirdInput={{textPlaceholder: "Word 12", textValue: null }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  }
});

export default SeedPhraseMenu;