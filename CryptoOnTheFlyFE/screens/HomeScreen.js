import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { getValueFor } from '../utils/SecureStorage';
import { Camera } from 'expo-camera';

const HomeScreen = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleShowKey = async () => {
      const result = await getValueFor("seedPhrase"); // TODO: shouldn't happen that no seedPhrase is found but if happen we send user to welcome screen?
      console.log(result);
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button 
        title="Get key"
        onPress={handleShowKey}
      />
      <Button 
        title="Scan QR"
        onPress={() => navigation.navigate('ScanQR')}
      />
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
      fontSize: 18,
      marginBottom: 10,
    },
});

export default HomeScreen;