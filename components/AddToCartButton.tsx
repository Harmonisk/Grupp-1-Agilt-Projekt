// Component: AddToCartButton
// Description: Som användare vill jag kunna lägga till produkt i varukorg från ett produktkort samt lära mig mer om produkten innan köp.

"use client";
import Button from "./Button";
import React from "react";
import { useProductContext } from "./ProductContext";
import Product from "@/interfaces/product";

export default function AddToCartButton({
  product
}: {
  product: Product
}) {
  const pc = useProductContext()

  const handleClick = () => {
    pc.setAmount(product, (product.amount ?? 0) + 1);
	console.log("product");
  };

  return (
    <Button onClick={handleClick} className="bg-[#CBA5A5] border-2 p-1 gap-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
      </svg>
      Add
    </Button>
  );
}
