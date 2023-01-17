import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text } from 'react-native';

import { useCameraDevices } from 'react-native-vision-camera';
import { Camera } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import { ProductContext } from '../../context/ProductContext';

export const ScannerScreen = () => {
  const devices = useCameraDevices();
  const navigaion = useNavigation();
  const device = devices.back;
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.ALL_FORMATS], {
    checkInverted: true,
  });

  const [hasPermission, setHasPermission] = useState(false);

  const { setProductsWithScam } = useContext(ProductContext);

  useEffect(() => {
    grandPermisison();
  }, []);

  useEffect(() => {
    if (barcodes[0]?.rawValue) {
      setProductsWithScam({
        code: barcodes[0].rawValue,
        product_name: barcodes[0].displayValue,
      });
      navigaion.goBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barcodes]);

  const grandPermisison = async () => {
    try {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    } catch (e) {
      console.log('error', e);
    }
  };

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
