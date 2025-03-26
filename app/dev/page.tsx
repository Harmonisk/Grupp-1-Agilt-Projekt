import { fetchAllCategories, fetchProductsByCategory, fetchSingleProduct } from "@/actions/server-actions";
import Product from "@/interfaces/product";
import Category from "@/interfaces/category";
import { fetchAllProducts } from "@/actions/server-actions";
import Image from "next/image";
import SelectableProductList from "@/components/SelectableProductList";


export default async function Home() {
    const cats:Category[]=await fetchAllCategories();
    const response:Product[] = await fetchProductsByCategory(cats[0],10,0);
    console.log(response[0].brand);
    console.log(typeof response);
    return (
    <>
      {/*response?.map((prod,index)=>(<div key={index}><h2>{prod.id}</h2><h2>{prod.title}</h2></div>))*/}
      <SelectableProductList />
      
    </>
    
  );
}
