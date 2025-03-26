// Component: SelectableProductList
// Desciption: Som användare vill jag kunna filtrera och sortera en lista av produkter
// så att jag lättare kan hitta de produkter jag är intresserad av.

import Category from "@/interfaces/category";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import { fetchSingleProduct } from "@/actions/server-actions";

interface SelectableProductListProps{
  category? : Category | undefined;
  featured?: boolean
  limit?: number;
  page?: number; 
}

export default async function SelectableProductList({
  category=undefined,
  limit=8,
  page=1,
  featured=false,
}: SelectableProductListProps) {

  
  return (
    <div className="selectable-product-list">
      {/* <FilterSortBar></FilterSortBar> */}
      <ProductList category={category} limit={limit} page={page} featured={featured} />
      <Pagination currentPage={1} maxPage={999}/>
    </div>
  );
}
