import { Metadata } from "next";
import Product from "./product";
import { fetchSingleProduct } from "@/actions/server-actions";

export async function generateMetadata({ params }: { params: Promise<{ id: number }> }): Promise<Metadata> {
  const id = (await params).id;
  const product = await fetchSingleProduct(id);
  return { title: product.title + " - Acme Inc" };
}

export default async function ProductPage({ params }: { params: Promise<{ id: number }> }) {
  const id = (await params).id;

  return (
    <main>
      <Product id={id} />
    </main>
  );
}
