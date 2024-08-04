import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ScanQRScreen({ navigation }) {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return ( //TODO: add view
        <Text>No access to camera, please give permissions in settings.</Text>
    )
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function handleBarCodeScanned({ data }) {
    navigation.navigate('SignMessage', {messageInfo: data})
  }

  return (
    <View style={styles.container}>
        <CameraView 
            style={styles.camera} 
            facing='back'   
            onBarcodeScanned={handleBarCodeScanned}
            barcodeScannerSettings={{
                barcodeTypes: ["qr"],
        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1A1733',
    },
    camera: {
      width: "90%",
      height: "80%",
      borderRadius: 10,
      overflow: 'hidden',
    },
});
  