import { fetchSingleProduct } from "@/actions/server-actions";
import Product from "@/interfaces/product";
import { fetchAllProducts } from "@/actions/server-actions";
import Image from "next/image";


export default async function Home() {
    const response:Product[] = await fetchAllProducts(10,2);
    console.log(response[0].brand);
    console.log(typeof response);
    return (
    <>
      {response?.map((prod,index)=>(<div key={index}><h2>{prod.id}</h2><h2>{prod.title}</h2></div>))}
      
    </>
    
  );
}
