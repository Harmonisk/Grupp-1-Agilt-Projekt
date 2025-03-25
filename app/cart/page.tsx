"use client"
import GlobalFooter from "@/components/GlobalFooter";
import GlobalHeader from "@/components/GlobalHeader";
import Main from "@/components/Main";

export default function CartPage() {
    const pc = useProductContext()

    return (
        <>
            <GlobalHeader />
            <Main>
                <h2>Cart Page</h2>
                {/* <div className="text-xl">Totalt: 456{ac.myProducts.reduce((a, p) => a += p.amount * p.price, 0).toFixed(2)} kr</div> */}
                <button>Betala</button>
                <table>
                    <tr>
                        <th>Vara</th>
                        <th>Antal</th>
                        <th>Pris styck</th>
                        <th>Pris totalt</th>
                    </tr>
                    {pc.myProducts.map((p, i) => <tr key={"a" + i}>
                        <td>{p.title}</td>
                        <td>{p.price}</td>
                        <td>{/* p.amount */}</td>
                        <td>{/* p.amount * */ p.price}</td>
                    </tr>)}
                </table>
            </Main>
            <GlobalFooter />
        </>
    );
}