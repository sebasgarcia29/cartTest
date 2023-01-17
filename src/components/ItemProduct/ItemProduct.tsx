/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import type { Producto } from '../../interfaces/productsInterface2';

interface Props {
  item: Producto;
}

export const ItemProduct = (props: Props) => {
  const { item } = props;

  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Icon name="information" size={25} color="white" />
      </View>
      <View style={styles.center}>
        <Text style={styles.productName}>{item.product_name ?? 'No name'}</Text>
      </View>
    </View>
  );
};
