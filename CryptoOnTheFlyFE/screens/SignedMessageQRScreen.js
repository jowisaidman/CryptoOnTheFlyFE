
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignedMessageQRScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{route.params.signedMessage}</Text>
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
    fontSize: 24,
    marginBottom: 20,
  },
});

export default SignedMessageQRScreen;