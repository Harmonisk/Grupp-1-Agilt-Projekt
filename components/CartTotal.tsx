"use client"
import { useProductContext } from "./ProductContext"

export function CartTotal() {
    const pc = useProductContext()

    return (<>
        {pc.cartProducts.reduce((a, p) => a + (p.amount ?? 0) * p.price, 0).toFixed(2)} kr
    </>)
}