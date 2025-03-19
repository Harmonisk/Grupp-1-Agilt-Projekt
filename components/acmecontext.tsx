'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import Product from '@/interfaces/product';
import { loadCartSA } from '@/actions/server-actions';
import { saveCart } from '@/lib/client/clientutil';

interface ProductContextType {
  myProducts: Product[];
  changeAmount: (product: Product, amount: number) => void;
  filterCart: () => void;
  showSearchList: boolean;
  setShowSearchList: (showList: boolean) => void;
  showCartList: boolean;
  setShowSavedList: (showList: boolean) => void;
};

interface LS {
  showSearchList: boolean,
  showCartList: boolean,
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [myProducts, setMyProducts] = useState<Product[]>([]);
  const [showSearchList, setStateShowSearchList] = useState(false);
  const [showCartList, setStateShowSavedList] = useState(false);

  useEffect(() => {
    loadCartSA().then(list => {
      setMyProducts(list ?? []);
    });
    const ls = localStorage.getItem("Products");
    if (ls) {
      const lso: LS = JSON.parse(ls);
      if (lso) {
      setStateShowSearchList(lso.showSearchList);
      setStateShowSavedList(lso.showCartList);
      }
    }
  }, []);

  const setShowSearchList = (showSearchList: boolean) => {
    setStateShowSearchList(showSearchList);
    storeInLS({
      showSearchList,
      showCartList,
    });
  };

  const setShowSavedList = (showCartList: boolean) => {
    setStateShowSavedList(showCartList);
    storeInLS({
      showSearchList,
      showCartList,
    });
  };

  const storeInLS = (lso: LS) => {
    localStorage.setItem("Products", JSON.stringify(lso));
  }

  const filterCart = () => {
    /* const list = myProducts.filter(p => p.amount !== 0);
    setMyProducts(list);
    saveCart(list);*/
  }

  const changeAmount = (product: Product, amount: number) => {
    let list = [...myProducts];
    let cartprod: Product | undefined = undefined;
    if (cartprod = myProducts.find(p => p.id === product.id)) {
/*       cartprod.amount = Math.max(0, amount); */
      if (amount < 1)
        list = myProducts.filter(p => p.id !== cartprod?.id); // Remove product from cart
    } else if (amount > 0) {
/*       product.amount = amount; */
      list = [product, ...myProducts]; // Add product to cart
    }
    setMyProducts(list);
    saveCart(list);
  };

  return (
    <ProductContext.Provider value={{
      myProducts, changeAmount, filterCart,
      showSearchList, setShowSearchList,
      showCartList: showCartList, setShowSavedList,
    }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within an ProductProvider');
  }
  return context;
}