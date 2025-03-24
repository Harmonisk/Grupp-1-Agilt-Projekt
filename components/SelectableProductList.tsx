// Component: SelectableProductList
// Desciption: Som användare vill jag kunna filtrera och sortera en lista av produkter
// så att jag lättare kan hitta de produkter jag är intresserad av.

import ProductList from "./ProductList";
import { fetchSingleProduct } from "@/actions/server-actions";

export default async function SelectableProductList({
  params,
}: {
  params: { name?: string; id?: number };
}) {
  // If category page, we use the category name from the URL.
  let category = params.name;
  // If product page, we fetch the product and use the category from the product.
  if (!category && params.id) {
    const product = await fetchSingleProduct(params.id);
    category = product.category;
  }
  return (
    <div className="selectable-product-list">
      {/* <FilterSortBar></FilterSortBar> */}
      <ProductList category={category} />
      {/* <Pagination></Pagination> */}
    </div>
  );
}
