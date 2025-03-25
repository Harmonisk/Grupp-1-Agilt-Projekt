"use client"
import Button from "./Button";
import { useProductContext } from "./ProductContext";

// Button that removes all products from the cart
export function ClearButton() {
    const pc = useProductContext();

    const onClick = () => {
        for (const p of pc.cart) {
            pc.setAmount(p, 0);
        }
    }

    return (
        <Button onClick={onClick}>Töm kundkorg</Button>
    )
}