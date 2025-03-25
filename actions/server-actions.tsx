import Product from "@/interfaces/product";
import Category from "@/interfaces/category";
const BASE_URL = "https://dummyjson.com/products"

export async function fetchAllProducts(limit:number=0,page:number=1 ){
    const fetchUrl = `${BASE_URL}?${limit>0?'limit='+limit+'skip='+limit*page:'limit=0'}`
    console.log(fetchUrl);
    const response = await fetch(`${BASE_URL}?${limit>0?'limit='+limit+'skip='+limit*page:'limit=0'}`);
    if(!response.ok){
        throw new Error(`Server error, invalid response: ${response}`);
    }
    
    const data:Product[] = await response.json();
    console.log(data[0]);
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
    const data:Category[] = await response.json();
    return data;
}

export async function fetchProductsByCategory(category:Category){
    const response = await fetch(`${category.url}`);
    if(!response.ok){
        throw new Error(`Server error, invalid response: ${response}`)
    }
    const data:Product[] = await response.json();
    return data;
}

