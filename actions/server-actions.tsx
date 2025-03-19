"use server";
import Product from "@/interfaces/product";
import { auth } from '@clerk/nextjs/server';
import { dbLoadCart, dbSaveCart } from '@/lib/server/db';

const BASE_URL = "https://dummyjson.com/products"

export async function fetchAllProducts(){
    const response = await fetch(BASE_URL);
    if(!response.ok){
        throw new Error(`Server error, invalid response: ${response}`);
    }
    const data:Product[] = await response.json();
    return data;
}

export async function saveCartSA(animes: Product[]) {
    const { userId } = await auth();
    if (userId)
        dbSaveCart(userId, animes);
}

export async function loadCartSA(): Promise<Product[] | null> {
    const { userId } = await auth();
    if (!userId)
        return null;
    const animes = await dbLoadCart(userId);
    if (!animes)
        return null;
    return animes;
}