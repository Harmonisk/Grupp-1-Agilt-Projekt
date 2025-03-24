'use client';
import React, { createContext, useContext, useState } from "react";
import Product from "@/interfaces/product";

interface ProductContextType {
    cartProducts: Product[];
    setAmount: (product: Product, amount: number) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [cart, setCart] = useState<Product[]>([]);

    const setAmount = (product: Product, amount: number) => {
        let list = [...cart];
        let cartProduct = cart.find(p => p.id === product.id);
        if (cartProduct) {
            //cartprod.amount = Math.max(0, amount);
            /*if (amount < 1)
              list = cartProducts.filter(p => p.id !== cartprod?.id); // Remove product from cart
            */
        } else if (amount > 0) {
            //product.amount = amount;
            list = [product, ...cart]; // Add product to cart
        }
        setCart(list);
    };

    return (
        <ProductContext.Provider value={{ cartProducts: cart, setAmount }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProductContext() {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
}