"use client"
import Image from "next/image"
import { useProductContext } from "./ProductContext"
import { RemoveFromCartButton } from "./RemoveFromCartButton"

export default function CartList() {
    const pc = useProductContext()

    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Vara</th>
                    <th>Antal</th>
                    <th>Styckpris</th>
                    <th>Totalt pris</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {pc.cart.map((p, i) => <tr key={"a" + i}>
                    <td><Image src={p.images[0]} alt={"Bild på " + p.title} width={100} height={50} /></td>
                    <td>{p.title}</td>
                    <td>{p.amount}</td>
                    <td>{p.price}</td>
                    <td>{(p.amount ?? 0) * p.price}</td>
                    <td><RemoveFromCartButton product={p} /></td>
                </tr>)}
            </tbody>
        </table>
    )
}
