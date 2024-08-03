import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SignMessageButton from '../components/SignMessageButton';

const SignMessageScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign message: {route.params.messageInfo}</Text>
      <SignMessageButton message={route.params.messageInfo} navigation={navigation}/>
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