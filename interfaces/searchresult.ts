import Product from "./product";

export interface SearchResult {
    "products": Product[],
    "total": number,
    "skip": number,
    "limit": number
}
