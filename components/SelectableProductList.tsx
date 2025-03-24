// Component: SelectableProductList
// Desciption: Som användare vill jag kunna filtrera och sortera en lista av produkter
// så att jag lättare kan hitta de produkter jag är intresserad av.
import React from "react";
import ProductList from "./ProductList";
import SubHeadline from "./SubHeadline";

export default function SelectableProductList() {
  return (
    <div className="selectable-product-list">
      <SubHeadline>Sub-headline</SubHeadline>
      {/* <FilterSortBar></FilterSortBar> */}
      <ProductList></ProductList>
      {/* <Pagination></Pagination> */}
    </div>
  );
}
