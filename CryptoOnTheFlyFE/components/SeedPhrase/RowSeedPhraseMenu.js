import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const RowSeedPhraseMenu = ({firstInput, secondInput, thirdInput}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={firstInput.textPlaceholder}
        value={firstInput.textValue}
        style={styles.input}
        placeholderTextColor="#878c8c"
      />
      <TextInput
        placeholder={secondInput.textPlaceholder}
        value={secondInput.textValue}
        style={styles.input}
        placeholderTextColor="#878c8c"
      />
      <TextInput
        placeholder={thirdInput.textPlaceholder}
        value={thirdInput.textValue}
        style={styles.input}
        placeholderTextColor="#878c8c"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:100,
    backgroundColor: '#116466',
    borderRadius: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
  container: {
    flexDirection: 'row'
  }
});

export default RowSeedPhraseMenu;