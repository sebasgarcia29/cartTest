/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState } from 'react';
import clientAPI from '../client/client';
import type { Product } from '../interfaces/productsInterface';
import type { Producto } from '../interfaces/productsInterface2';

type ProductsContextProps = {
  products: Producto[];
  loadProducts: (code: string) => Promise<void>;
  setProductsWithScam: (product: Producto) => void;
  addQtyProduct: (product: Producto) => void;
  substractQtyProduct: (product: Producto) => void;
};

export const ProductContext = createContext({} as ProductsContextProps);

export const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Producto[]>([]);

  const loadProducts = async (code: string) => {
    const resp = await clientAPI.get<Product>(
      `https://world.openfoodfacts.org/api/v0/product/${code}.json`
    );
    const product: Producto = {
      code: resp.data.code,
      product_name: resp.data.product.generic_name,
      image: resp.data.product.image_front_small_url,
      qty: 1,
    };

    setProducts([...products, product]);
  };

  const setProductsWithScam = (product: Producto) => {
    if (products.find((p) => p.code === product.code)) return;
    setProducts([...products, product]);
  };

  const addQtyProduct = (product: Producto) => {
    const newProduct = products.map((p) => {
      if (p.code === product.code) {
        return {
          ...p,
          qty: p.qty + 1,
        };
      } else {
        return p;
      }
    });
    setProducts(newProduct);
  };

  const substractQtyProduct = (product: Producto) => {
    let newProduct;
    if (product.qty === 1) {
      newProduct = products.filter(
        (productDelete) => productDelete.code !== product.code
      );
    } else {
      newProduct = products.map((p) => {
        if (p.code === product.code) {
          return {
            ...p,
            qty: p.qty - 1,
          };
        } else {
          return p;
        }
      });
    }
    setProducts(newProduct);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loadProducts,
        setProductsWithScam,
        addQtyProduct,
        substractQtyProduct,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
