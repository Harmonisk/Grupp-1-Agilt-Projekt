//Component: ProductList
//Description: Som utvecklare vill jag kunna visa kunden produkter i form av en lista.

import React from "react";
import ProductCard from "./ProductCard";
import {
  fetchAllProducts,
  fetchProductsByCategory,
} from "@/actions/server-actions";
import Product from "@/interfaces/product";

interface ProductListProps {
  category?: string | string[];
  limit?: number;
  page?: number;
  featured?: boolean;
}

export default async function ProductList({
  category,
  limit = 8, // Default values
  page = 1,
  featured = false,
}: ProductListProps) {
  let products: Product[];

  if (category) {
    products = await fetchProductsByCategory(category);
  } else {
    //Featured is to be decided around and logic should be inside the fetchAllProducts function
    products = await fetchAllProducts(limit, page, featured);
  }

  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id}>
          {/* {...product} sends all props to ProductCard. */}
          <ProductCard {...product} />
        </li>
      ))}
    </ul>
  );
}
