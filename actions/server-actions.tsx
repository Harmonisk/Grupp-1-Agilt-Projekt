import Product from "@/interfaces/product";
import Category from "@/interfaces/category";
import { SearchResult } from "@/interfaces/searchresult";
// import { console } from "inspector";

const BASE_URL = "https://dummyjson.com/products"

export async function fetchAllProducts(limit:number=0,page:number=1, featured:boolean=false ){

	if(featured)
		limit=0;
	const fetchUrl = `${BASE_URL}?${ limit>0 ? 'limit='+limit+'&skip='+limit*page : 'limit=0'}`;
	const response = await fetch(fetchUrl);
	if(!response.ok){
        throw new Error(`Server error, invalid response: ${response}`);
    }
	const data:{products:Product[]} = await response.json();

	if(featured){
		const updatedProducts = data.products.map((product) => ({...product, featuredScore:product.discountPercentage * product.rating}) )
		.sort((a, b) => b.featuredScore - a.featuredScore);
		
		const final:Product[]=updatedProducts;
		final.map((product) => console.log(product.featuredScore));
	}

	const final:Product[]=data.products;
    return final;
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

export async function fetchProductsByCategory(category:Category, limit:number=0, page:number=0){
    const fetchUrl = `${category.url}?${ limit>0? 'limit='+limit+'&skip='+limit*page : 'limit=0'}`;
    const response = await fetch(fetchUrl);
    if(!response.ok){
        throw new Error(`Server error, invalid response: ${response}`)
    }
    const data:{products:Product[]} = await response.json();
    const {products}=data;
    const final:Product[]=[...products]
    return final;
}

export async function fetchSearch(query: string, limit: number = 0, page: number = 1){
    const limitstr = limit > 0 ? `&limit=${limit}` : ""
    const skip = (page - 1) * limit
    const skipstr = page > 1 ? `&skip=${skip}` : ""
    const fetchUrl = BASE_URL + "/search?q=" + query + limitstr + skipstr
    const res: SearchResult = await fetchJSON(fetchUrl)
    return res;
}

async function fetchJSON(url: string) {
    console.log(url)
    const response = await fetch(url)
    if(!response.ok){
        console.log("Fetch error: ", response)
        throw new Error("Server error, invalid response: " + response.status)
    }
    return await response.json()
}