// Description: This component is used to display a product card
// with an image, title, price and an add to cart button.
// The inputs are the id of the product and an optional scale (1x default).
// Example usage: <ProductCard id={8} scale={2}/> , 
// where id is the id of the product and scale is the scale of the card.

'use client'
import AddToCartButton from "./AddToCartButton";
import { fetchSingleProduct } from "@/actions/server-actions";
import React, { useEffect, useState } from "react";
import Product from "@/interfaces/product";
import Image from "next/image";

interface ProductCardProps{
	id:number;
	scale?:number;
}

export default function ProductCard({ id, scale }: ProductCardProps) {
	const [product, setProduct] = useState<Product | null>(null);
	const [imageLoaded, setImageLoaded] = useState(false);
	!scale && (scale = 1);

	useEffect(() => {
		async function getProduct() {
			const fetchedProduct = await fetchSingleProduct(id);
			setProduct(fetchedProduct);
			console.log(fetchedProduct);
		}
		getProduct();
	}, [id]);

	return (
		<div className=" bg-white text-black rounded-lg overflow-hidden flex flex-col"
			style={{height: `calc(16rem * ${scale})`, width: `calc(12rem * ${scale})`}}>
			<div className="h-4/7 w-auto relative p-5">
			{!imageLoaded && (
          <div className="w-full h-full flex items-center justify-center">
            <span>Loading image...</span>
          </div>
        )}
				{product && <Image src={product.images[0]} alt="product" layout="fill" objectFit="cover" onLoadingComplete={() => setImageLoaded(true)}/>}
			</div>
				
			<div className="h-3/7 bg-[#D9D9D9] p-2 flex justify-between flex-col-reverse">
				
				<div className="gap-3">
					{imageLoaded && <h2>{product && product.price} kr</h2>}
					
				
					<AddToCartButton />
				</div>
				{imageLoaded && <h2 className="text-md font-semibold leading-4 break-words">{product && product.title}</h2>}
			</div>
		
		</div>
	);
}