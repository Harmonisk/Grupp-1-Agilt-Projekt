"use client"
import Product from "@/interfaces/product";
import Button from "./Button";
import { useProductContext } from "./ProductContext";

export function RemoveFromCartButton({
    product
} : {
    product: Product
}) {
    const pc = useProductContext()

    return (
        <Button onClick={() => pc.setAmount(product, 0)}>Ta bort</Button>
    )
}