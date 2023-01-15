import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import { ProductContext } from '../../context/ProductContext';
import { styles } from './styles';

export const HomeScreen = () => {
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
              onPress={() => console.log({ item: item.product_name })}>
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
