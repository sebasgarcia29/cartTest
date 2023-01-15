/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import type { Producto, ProductsResponse } from '../interfaces/productsInterface2';
import clientAPI from '../client/client';

type ProductsContextProps = {
  products: Producto[];
  loadProducts: () => Promise<void>;
};

export const ProductContext = createContext({} as ProductsContextProps);

export const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Producto[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const resp = await clientAPI.get<ProductsResponse>(
      '/api/v2/search?categories_tags_en=chocolates&labels_tags_en=organic,fair%20trade&fields=code,product_name'
    );
    setProducts([...resp.data.products]);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loadProducts,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
