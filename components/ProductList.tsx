//Component: ProductList
//Description: Som utvecklare vill jag kunna visa kunden produkter i form av en lista.

"use client";

import React from "react";
import ProductCard from "./ProductCard";
import {
  fetchAllProducts,
  fetchProductsByCategory,
} from "@/actions/server-actions";
import Product from "@/interfaces/product";
import Category from "@/interfaces/category";
import { use, useEffect, useState } from "react";

interface ProductListProps {
  category?: Category;
  limit?: number;
  page?: number;
  featured?: boolean;
}



export default function ProductList({
  category,
  limit = 8, // Default values
  page = 1,
  featured = false,
}: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);

  const  setProds = async()=>{
    if (category) {
        setProducts(await fetchProductsByCategory(category));
      } else {
        //Featured is to be decided around and logic should be inside the fetchAllProducts function
        setProducts(await fetchAllProducts(limit, page, featured));
      }
  }
  useEffect(()=>{
    setProds();   
  })
  

  return (
    <ul className="product-list">
      {/* Moved <li> inside of ProductCard */}
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ul>
  );
}
