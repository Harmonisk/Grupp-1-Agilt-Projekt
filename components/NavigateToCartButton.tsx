"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function NavigateToCartButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/checkout");
  };

  return (
    <Button onClick={handleClick} className="navigate-to-cart-button">
      <span className="navigate-to-cart-button__icon"></span>
      Checkout
    </Button>
  );
}
