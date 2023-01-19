/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Image, Modal, Pressable, Text, View } from 'react-native';
import { ProductContext } from '../../context/ProductContext';
import type { Producto } from '../../interfaces/productsInterface2';
import { PageName } from '../../navigation/PageName';
import { styles } from './styles';
interface Props {
  product: Producto;
  modalVisible: boolean;
  handleScan: () => void;
}

export const ModalConfirm = ({ modalVisible, handleScan }: Props) => {
  const { scanProduct, setProductsWithScam } = useContext(ProductContext);

  const navigation = useNavigation();

  const onAddProduct = () => {
    setProductsWithScam(scanProduct);
    navigation.navigate(PageName.HomeScreen);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => console.log}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Image
            style={styles.productImage}
            source={{
              uri: scanProduct.image,
            }}
          />
          <Text style={styles.modalText}>{scanProduct.product_name}</Text>
          <View style={styles.modalContainer}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onAddProduct}>
              <Text style={styles.textStyle}> {'Add'} </Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleScan()}>
              <Text style={styles.textStyle}>{'Cancel'}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
