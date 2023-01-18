/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import type { Producto } from '../../interfaces/productsInterface2';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  item: Producto;
  addQtyProduct: (product: Producto) => void;
  substractQtyProduct: (product: Producto) => void;
}

export const ItemProduct = (props: Props) => {
  const { item, addQtyProduct, substractQtyProduct } = props;

  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Image
          style={styles.productImage}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={styles.center}>
        <Text style={styles.productName}>{item.product_name ?? 'No name'}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => substractQtyProduct(item)}>
          <View style={[styles.cartButton, styles.leftCorners]}>
            <Text> - </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.quantityFont}>
          <Text>{item.qty}</Text>
        </View>
        <TouchableOpacity onPress={() => addQtyProduct(item)}>
          <View style={[styles.cartButton, styles.rightCorners]}>
            <Text> + </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
