// Component: SelectableProductList
// Desciption: Som användare vill jag kunna filtrera och sortera en lista av produkter
// så att jag lättare kan hitta de produkter jag är intresserad av.
import React from "react";
import ProductList from "./ProductList";
import SubHeadline from "./SubHeadline";

export default function SelectableProductList({
  params,
}: {
  params: { name: string };
}) {
  return (
    <div className="selectable-product-list">
      {/* params.name would be "Category name" when called from within category/[name]/page.tsx */}
      <SubHeadline>{params.name}</SubHeadline>
      {/* <FilterSortBar></FilterSortBar> */}
      <ProductList category={params.name}></ProductList>
      {/* <Pagination></Pagination> */}
    </div>
  );
}
