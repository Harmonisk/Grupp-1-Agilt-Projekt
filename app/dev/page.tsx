import { fetchSingleProduct } from "@/actions/server-actions";
import Product from "@/interfaces/product";
import { fetchAllProducts } from "@/actions/server-actions";
import Image from "next/image";


export default async function Home() {
    const response:Product[] = await fetchAllProducts();
    return (
    <>
      {response.map((prod,index)=><h2 key={index}>{prod.title}</h2>)}
      
    </>
    
  );
}
