import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { getValueFor} from '../utils/SecureStorage';

const HomeScreen = () => {

  const handleShowKey = async () => {
      const result = await getValueFor("seedPhrase"); // TODO: handle error
      console.log(result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button 
        title="Get key"
        onPress={() => handleShowKey("seedPhrase")}
      />
    </View>
  );
};

//TOOD: during the app init we should save in the normal storage or do a get to secureStorage and check if user already saved a wallet.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;