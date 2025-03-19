"use client";
import React from "react";
import { useProductContext } from "@/components/acmecontext";

export function CartProducts() {
    const ac = useProductContext();

    return (<>
        {/* <div className="text-xl">Totalt: 456{ac.myProducts.reduce((a, p) => a += p.amount * p.price, 0).toFixed(2)} kr</div> */}
        <button>Betala</button>
        <div className="flex flex-wrap justify-center items-center gap-2">
            <label htmlFor="chkShowList" className="flex gap-1">Visa lista:
                <input
                    type="checkbox" id="chkShowList" checked={ac.showCartList}
                    onChange={() => ac.setShowSavedList(!ac.showCartList)} />
            </label>
        </div>
        {ac.myProducts.map((p, i) => <div key={"a" + i}>
            <div>{p.title}</div>
            <div>{p.price}</div>
        </div>)}
        {/*        {ac.showCartList ?
            <ProductList products={ac.myProducts} /> :
            <Cards products={ac.myProducts} isCart={true} />}
    */}
    </>);
}
