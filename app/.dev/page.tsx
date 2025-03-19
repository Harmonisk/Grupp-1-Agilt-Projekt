import { fetchSingleProduct } from "@/actions/server-actions";
import Product from "@/interfaces/product";
import Image from "next/image";


export default async function Home() {
    const response:Product = await fetchSingleProduct(1);
    return (
    <>
      <h2>{response.title}</h2>
    </>
    
  );
}
