// Component: SelectableProductList
// Desciption: Som användare vill jag kunna filtrera och sortera en lista av produkter
// så att jag lättare kan hitta de produkter jag är intresserad av.

"use client";

import Category from "@/interfaces/category";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import { useState, Suspense, useEffect } from "react";
import { fetchSingleProduct, numberOfProducts } from "@/actions/server-actions";

interface SelectableProductListProps{
  category? : Category | undefined;
  featured?: boolean
  limit?: number;
  page?: number; 
}

export default function SelectableProductList({
  category=undefined,
  limit=8,
  page=1,
  featured=false,
}: SelectableProductListProps) {
  const [currentPage, setCurrentPage] = useState(page);
  const [maxPage, setMaxPage] = useState(1);

  function clickNext(){

  }

  useEffect(()=>{
    const mPage = async ()=>{setMaxPage(Math.ceil((await numberOfProducts(category))/limit)); }
    mPage();
  },[currentPage])  
  return (
    <div className="selectable-product-list">
      {/* <FilterSortBar></FilterSortBar> */}
      <ProductList category={category} limit={limit} page={currentPage} featured={featured} />
      <Pagination currentPage={currentPage} maxPage={maxPage} onNext={()=>setCurrentPage(currentPage<maxPage ? currentPage+1 : maxPage)} onPrev={()=>setCurrentPage(currentPage>1 ? currentPage-1 : 1)} />
    </div>
  );
}
