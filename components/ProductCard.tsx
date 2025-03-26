//Component: ProductCard..

"use client";
import AddToCartButton from "./AddToCartButton";
import { fetchSingleProduct } from "@/actions/server-actions";
import React, { useEffect, useState } from "react";
import Product from "@/interfaces/product";
import Image from "next/image";

export default function ProductCard({ id }: { id: number }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    async function getProduct() {
      const fetchedProduct = await fetchSingleProduct(id);
      setProduct(fetchedProduct);
      console.log(fetchedProduct);
    }
    getProduct();
  }, [id]);

  return (
    <li className="product-card">
      {!imageLoaded && (
        <div className="w-full h-full flex items-center justify-center">
          <span>Loading image...</span>
        </div>
      )}
      {product && (
        <Image
          src={product.images[0]}
          alt="product"
          layout="fill"
          objectFit="cover"
          onLoadingComplete={() => setImageLoaded(true)}
          className="product-card__image"
        />
      )}

      <div className="product-card__wrapper">
        <div className="product-info">
          {imageLoaded && (
            <div className="product-info__price">
              {product && product.price} kr
            </div>
          )}

          {imageLoaded && (
            <h4 className="product-info__title">{product && product.title}</h4>
          )}

          <AddToCartButton />
        </div>
      </div>
    </li>
  );
}
