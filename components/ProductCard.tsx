'use client'
import AddToCartButton from "./AddToCartButton";
import { fetchSingleProduct } from "@/actions/server-actions";
import React, { useEffect, useState } from "react";
import Product from "@/interfaces/product";
import Image from "next/image";

export default function ProductCard({
	id,
	prod
}: {
	id?: number,
	prod?: Product
}) {
	const [product, setProduct] = useState<Product | null>(null);
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		async function getProduct() {
			const fetchedProduct = await fetchSingleProduct(id ?? 1);
			setProduct(fetchedProduct);
			console.log(fetchedProduct);
		}
		if (prod)
			setProduct(prod)
		else
			getProduct();
	}, [id, prod]);

	return (
		<div className="w-48 h-64 bg-white text-black rounded-lg overflow-hidden flex flex-col">
			<div className="h-4/7 w-auto relative p-5">
				{!imageLoaded && (
					<div className="w-full h-full flex items-center justify-center">
						<span>Loading image...</span>
					</div>
				)}
				{product && <Image src={product.images[0]} alt="product" layout="fill" objectFit="cover" onLoadingComplete={() => setImageLoaded(true)} />}
			</div>

			<div className="h-3/7 bg-[#D9D9D9] p-2 flex justify-between flex-col-reverse">

				<div className="gap-3">
					{imageLoaded && <h2>{product && product.price} kr</h2>}


					<AddToCartButton product={product} />
				</div>
				{imageLoaded && <h2 className="text-md font-semibold leading-4 break-words">{product && product.title}</h2>}
			</div>

		</div>
	);
}