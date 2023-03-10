/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from 'react';
import { View, FlatList, RefreshControl, Text } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { ItemProduct } from '../../components/ItemProduct';
import { ProductContext } from '../../context/ProductContext';
import type { Params } from '../../navigation/Params';
import { PageName } from '../../navigation/PageName';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<Params, PageName.HomeScreen> {}

export const HomeScreen = ({ navigation }: Props) => {
  const { products, addQtyProduct, substractQtyProduct } = useContext(ProductContext);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadProductsFromBackend = async () => {
    setIsRefreshing(true);
    setIsRefreshing(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.containerIcon}>
          <TouchableOpacity onPress={() => navigation.navigate(PageName.ScannerScreen)}>
            <Icon name="barcode" color={'white'} size={25}>
              <Text style={styles.title}> {'Add product'}</Text>
            </Icon>
          </TouchableOpacity>
        </View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.code}
          renderItem={({ item }) => (
            <ItemProduct
              addQtyProduct={addQtyProduct}
              substractQtyProduct={substractQtyProduct}
              item={item}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={loadProductsFromBackend}
            />
          }
        />
      </View>
    </View>
  );
};
