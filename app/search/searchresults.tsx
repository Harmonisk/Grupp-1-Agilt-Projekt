"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Product from "@/interfaces/product"
import { useProductContext } from "@/components/ProductContext"
import Pagination from "@/components/Pagination"
import ProductCard from "@/components/ProductCard"
import { SearchResult } from "@/interfaces/searchresult"

export default function SearchResults({ searchResult }: { searchResult: SearchResult }) {
    const searchParams = useSearchParams();
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;
    const [products, setProducts] = useState<Product[] | null>(null);
    const pc = useProductContext();
    const router = useRouter();

    useEffect(() => {
        // Set amounts for products in the cart
        setProducts(searchResult.products.map(
            p => {return { ...p, amount: pc.cart.find(s => s.id === p.id)?.amount ?? 0 }}))
    }, [searchResult, pc.cart])

    const onPrevPage = () => {
        if (page > 1) {
            const params = new URLSearchParams(searchParams);
            const nextPage = page - 1;
            params.set('page', nextPage.toString());
            router.push(`/search?${params.toString()}`);
        }
    };

    const onNextPage = () => {
        const params = new URLSearchParams(searchParams);
        const nextPage = page + 1;
        params.set('page', nextPage.toString());
        router.push(`/search?${params.toString()}`);
    };

    if (!products)
        return <>Söker...</>;

    return (<>
        <div className="flex justify-center items-center gap-4">
            <Pagination
                currentPage={3}
                maxPage={55}
                onPrev={onPrevPage}
                onNext={onNextPage} />
        </div>
        {searchResult.products.map((p, i) =>
            <ProductCard id={p.id} prod={p} key={i} />
        )}
    </>);
}
