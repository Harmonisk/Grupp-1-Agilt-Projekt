// Component: AddToCartButton
// Description: Som användare vill jag kunna lägga till produkt i varukorg från ett produktkort samt lära mig mer om produkten innan köp.

"use client";
import Button from "./Button";
import React from "react";
import { useProductContext } from "./ProductContext";
import Product from "@/interfaces/product";
import Icon from "./Icon";

export default function AddToCartButton({
  product,
}: {
  product: Product | null;
}) {
  const pc = useProductContext();

  const handleClick = () => {
    if (product) pc.setAmount(product, (product.amount ?? 0) + 1);
  };

  return (
    <Button onClick={handleClick} className="add-to-cart-button">
      <Icon className="add-to-cart-button_icon" type="shopping_bag"></Icon>
      Add
    </Button>
  );
}
