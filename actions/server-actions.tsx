import Product from "@/interfaces/product";
import Category from "@/interfaces/product";
const BASE_URL = "https://dummyjson.com/products"

export async function fetchAllProducts(){
    const response = await fetch(BASE_URL);
    if(!response.ok){
        throw new Error(`Server error, invalid response: ${response}`);
    }
    const data:Product[] = await response.json();
    return data;
}

export async function fetchSingleProduct(id:number){
    const response = await fetch(`${BASE_URL}/${id}`);
    if(!response.ok){
        throw new Error(`Server error, invalid response: ${response}`)
    }
    const data:Product = await response.json();
    return data;
}

export async function fetchAllCategories(){
    const response = await fetch(`${BASE_URL}/categories`);
    if(!response.ok){
        throw new Error(`Server error, invalid response: ${response}`)
    }
    const data:Category = await response.json();
    return data;
}