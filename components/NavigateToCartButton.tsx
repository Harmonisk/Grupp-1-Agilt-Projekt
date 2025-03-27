"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import Icon from "./Icon";

export default function NavigateToCartButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/cart");
  };

  return (
    <Button onClick={handleClick} className="navigate-to-cart-button">
      <Icon
        className="navigate-to-cart-button__icon"
        type="shopping_bag"
      ></Icon>
      Checkout
    </Button>
  );
}
