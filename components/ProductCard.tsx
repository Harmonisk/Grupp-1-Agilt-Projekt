//Component: ProductCard..

"use client";
import AddToCartButton from "./AddToCartButton";
import { fetchSingleProduct } from "@/actions/server-actions";
import React, { useEffect, useState } from "react";
import Product from "@/interfaces/product";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  id,
  prod,
}: {
  id?: number;
  prod?: Product;
}) {
  const [product, setProduct] = useState<Product | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    async function getProduct() {
      const fetchedProduct = await fetchSingleProduct(id ?? 1);
      setProduct(fetchedProduct);
      //console.log(fetchedProduct);
    }
    if (prod) setProduct(prod);
    else getProduct();
  }, [id, prod]);

  return (
    <li className="product-card">
      {!imageLoaded && (
        <div className="w-full h-full flex items-center justify-center">
          <span>Loading image...</span>
        </div>
      )}
      {product && (
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.images[0]}
            alt="product"
            width={800}
            height={600}
            onLoadingComplete={() => setImageLoaded(true)}
            className="product-card__image"
          />
        </Link>
      )}

      <div className="product-card__wrapper">
        <div className="product-info">
          {imageLoaded && (
            <h4 className="product-info__title">{product && product.title}</h4>
          )}
          {imageLoaded && (
            <div className="product-info__price">
              {product && product.price} kr
            </div>
          )}
          <AddToCartButton product={product} />
        </div>
      </div>
    </li>
  );
}
