"use client"
import Main from "@/components/Main";
import { CartTotal } from "@/components/CartTotal";
import { useProductContext } from "@/components/ProductContext";

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
                        <th>Vara</th>
                        <th>Antal</th>
                        <th>Pris styck</th>
                        <th>Pris totalt</th>
                    </tr>
                </thead>
                <tbody>
                    {pc.cart.map((p, i) => <tr key={"a" + i}>
                        <td>{p.title}</td>
                        <td>{p.price}</td>
                        <td>{p.amount}</td>
                        <td>{p.amount ?? 0 * p.price}</td>
                    </tr>)}
                </tbody>
            </table>
        </Main>
    );
}