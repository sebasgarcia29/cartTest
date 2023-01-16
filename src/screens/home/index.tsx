import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import { ProductContext } from '../../context/ProductContext';
import type { StackScreenProps } from '@react-navigation/stack';
import type { Params } from '../../navigation/Params';
import { PageName } from '../../navigation/PageName';
import { styles } from './styles';

interface Props extends StackScreenProps<Params, PageName.HomeScreen> {}

export const HomeScreen = ({ navigation }: Props) => {
  const { products, loadProducts } = useContext(ProductContext);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadProductsFromBackend = async () => {
    setIsRefreshing(true);
    await loadProducts();
    setIsRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.code}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => navigation.navigate(PageName.ScannerScreen)}>
              <Text style={styles.productName}>{item.product_name}</Text>
            </TouchableOpacity>
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
