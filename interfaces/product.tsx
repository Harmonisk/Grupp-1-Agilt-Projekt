export default interface Product{
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    stock: number;
    tags: string[];
    brand: string;
    thumbnail: string;
    images: string[];
	  rating: number;
	  discountPercentage: number;
	  featuredScore?: number;
    amount?: number;
}