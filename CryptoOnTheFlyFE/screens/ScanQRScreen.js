import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ScanQRScreen() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState('');

  if (!permission) {
    return <Text>No access to camera, please give permissions in settings.</Text>
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  function handleBarCodeScanned({ type, data }) {
    console.log(`QR code with type ${type} and data ${data} has been scanned!`);
    setScannedData(data);
  }

  function scanningQR() {
    console.log("Scanning QR!");
  }

  return (
    <View style={styles.container}>
        <CameraView 
            style={styles.camera} 
            facing={facing}   
            onBarcodeScanned={handleBarCodeScanned}
            barcodeScannerSettings={{
                barcodeTypes: ["qr"],
            }}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                    <Text style={styles.text}>Flip Camera</Text>
                </TouchableOpacity>
            </View>
        </CameraView>
        {scannedData ? (
        <Text style={styles.scannedData}>Scanned Data: {scannedData}</Text>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setScannedData('')}>
            <Text style={styles.text}>Scan Next QR</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    message: {
      textAlign: 'center',
      paddingBottom: 10,
    },
    camera: {
      width: "90%",
      height: "80%",
      borderRadius: 10,
      overflow: 'hidden',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 50,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    button: {
      alignSelf: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 10,
      borderRadius: 5,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    scannedData: {
        fontSize: 16,
        marginTop: 10,
      },
});
  