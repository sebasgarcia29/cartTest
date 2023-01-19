import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useCameraDevices, Camera } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import { RNHoleView } from 'react-native-hole-view';

import { ProductContext } from '../../context/ProductContext';
import { styles } from './styles';
import { ModalConfirm } from '../../components/modalConfirm';

export const ScannerScreen = () => {
  const { loadProducts, products } = useContext(ProductContext);

  const devices = useCameraDevices();
  const device = devices.back;
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.ALL_FORMATS], {
    checkInverted: true,
  });

  const [hasPermission, setHasPermission] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(true);

  useEffect(() => {
    grandPermisison();
  }, []);

  const getProduct = async (code: string) => {
    await loadProducts(code);
    setIsCameraActive(false);
    setModalVisible(true);
  };

  const handleScan = () => {
    setIsCameraActive(true);
    setModalVisible(false);
  };

  useEffect(() => {
    if (barcodes[0]?.rawValue) {
      getProduct(barcodes[0]?.rawValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barcodes]);

  const grandPermisison = async () => {
    try {
      const statusCamera = await Camera.requestCameraPermission();
      setHasPermission(statusCamera.includes('authorized'));
    } catch (err) {
      console.log('error', err);
    }
  };

  return device != null && hasPermission ? (
    <>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isCameraActive}
        frameProcessor={frameProcessor}
        frameProcessorFps={5}
      />
      {barcodes.map((barcode, idx) => (
        <Text key={idx} style={styles.barcodeTextURL}>
          {barcode.displayValue}
        </Text>
      ))}
      <RNHoleView
        style={styles.rnholeView}
        holes={[
          {
            x: 50,
            y: 250,
            width: 300,
            height: 200,
          },
        ]}
      />
      {modalVisible && (
        <ModalConfirm
          product={products[0]}
          modalVisible={modalVisible}
          handleScan={handleScan}
        />
      )}
    </>
  ) : (
    <View />
  );
};
