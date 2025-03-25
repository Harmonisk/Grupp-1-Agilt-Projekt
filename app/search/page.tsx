import { searchParamToString } from "@/lib/util";
import { Metadata } from "next";
import { Suspense } from "react";
import SearchResults from "./searchresults";
import { fetchSearch } from "@/actions/server-actions";

export const metadata: Metadata = { title: "Sök - Acme Inc" };

export default async function SearchPage({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const sp = await searchParams;
    const q = searchParamToString(sp.q);
    const page = +searchParamToString(sp.page) || 1;

    const res = await fetchSearch(q, 24, page)

    return (
      <Suspense fallback={<div>Laddar sidan...</div>}>
        <SearchResults searchResult={res} />
      </Suspense>
    )
}