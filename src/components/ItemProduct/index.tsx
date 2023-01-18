import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import type { Producto } from '../../interfaces/productsInterface2';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  item: Producto;
  addQtyProduct: (product: Producto) => void;
  substractQtyProduct: (product: Producto) => void;
}

export const ItemProduct = (props: Props) => {
  const { item, addQtyProduct, substractQtyProduct } = props;

  return (
    <View style={styles.container} key={item.code}>
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
            <Icon name="close-circle-outline" color={'white'} size={20} />
          </View>
        </TouchableOpacity>
        <View style={styles.quantityFont}>
          <Text>{item.qty}</Text>
        </View>
        <TouchableOpacity onPress={() => addQtyProduct(item)}>
          <View style={[styles.cartButton, styles.rightCorners]}>
            <Icon name="add-circle-outline" color={'white'} size={20} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
