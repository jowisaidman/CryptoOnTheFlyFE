import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SignMessageScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign message: {route.params.messageInfo}</Text>
      <Button title="Sign message" onPress={() => console.log("Signing message")}/>
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

export default SignMessageScreen;