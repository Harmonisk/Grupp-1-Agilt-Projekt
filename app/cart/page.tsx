"use client"
import Main from "@/components/Main";
import { CartTotal } from "@/components/CartTotal";
import { useProductContext } from "@/components/ProductContext";
import Image from "next/image";
import { RemoveFromCartButton } from "@/components/RemoveFromCartButton";

export default function CartPage() {
    const pc = useProductContext()

    return (
        <Main>
            <h2>Cart Page</h2>
            <div><CartTotal /> kr</div>
            <button>Betala</button>
            <table>
                <thead>
                    <tr>
                        <th>Bild</th>
                        <th>Vara</th>
                        <th>Antal</th>
                        <th>Pris styck</th>
                        <th>Pris totalt</th>
                        <th>Ta bort</th>
                    </tr>
                </thead>
                <tbody>
                    {pc.cart.map((p, i) => <tr key={"a" + i}>
                        <td><Image src={p.images[0]} alt={"Bild på " + p.title} width={100} height={50} /></td>
                        <td>{p.title}</td>
                        <td>{p.price}</td>
                        <td>{p.amount}</td>
                        <td>{p.amount ?? 0 * p.price}</td>
                        <td><RemoveFromCartButton product={p} /></td>
                    </tr>)}
                </tbody>
            </table>
        </Main>
    );
}