"use client"
import Product from "@/interfaces/product";
import Button from "./Button";

export function RemoveFromCartButton({
    product
} : {
    product: Product
}) {
    // const pc = useProductContext()

    // Add to button: onClick={() => pc.setAmount(p, 0)}
    return (
        <Button>Ta bort</Button>
    )
}