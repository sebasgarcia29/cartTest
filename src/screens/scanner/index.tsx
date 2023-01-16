import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { useCameraDevices } from 'react-native-vision-camera';
import { Camera } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';

export const ScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.ALL_FORMATS], {
    checkInverted: true,
  });

  console.log({ barcodes: barcodes[0]?.rawValue });

  const grandPermisison = async () => {
    try {
      const status = await Camera.requestCameraPermission();
      console.log('You can use the camera');
      setHasPermission(status === 'authorized');
    } catch (e) {
      console.log('Camera permission denied', e);
    }
  };

  useEffect(() => {
    grandPermisison();
  }, []);

  return (
    device != null &&
    hasPermission && (
      <>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          frameProcessor={frameProcessor}
          frameProcessorFps={5}
        />
        {barcodes.map((barcode, idx) => (
          <Text key={idx} style={styles.barcodeTextURL}>
            {barcode.displayValue}
          </Text>
        ))}
      </>
    )
  );
};

const styles = StyleSheet.create({
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
