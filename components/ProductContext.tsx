'use client';
import React, { createContext, useContext, useState } from "react";
import Product from "@/interfaces/product";

interface ProductContextType {
    cart: Product[];
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
            cartProduct.amount = Math.max(0, amount);
            if (amount < 1)
              list = cart.filter(p => p.id !== cartProduct?.id); // Remove product from cart
        } else if (amount > 0) {
            product.amount = amount;
            list = [...cart, product]; // Add product to cart
        }
        setCart(list);
    };

    return (
        <ProductContext.Provider value={{ cart, setAmount }}>
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