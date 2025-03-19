import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: number }> }): Promise<Metadata> {
  const id = (await params).id;
  const product = "Product " + id; //await getProduct(id);
  return { title: product/*.title*/ + " - Acme Inc" };
}

export default async function ProductPage({ params }: { params: Promise<{ id: number }> }) {
  const id = (await params).id;
  //  const product = await getProduct(id);

  return (
    <main className="flex flex-col gap-4 border m-4 p-2 md:flex-row">

      <div className="flex flex-col gap-2">
        <Link href={"vercel.svg" /*product.images[0]*/}>
          <Image
            className="w-60 h-90 object-cover"
            width={240} height={360}
            src={"/vercel.svg" /*product.images[0]*/}
            alt={`Bild på produkt` /*${product.title}`*/}
            priority />
        </Link>
      </div>

      <div className="flex flex-col gap-2 pr-4">
        Produkt {id}
        <h2 className="text-xl">Brödrost{/*product.title*/}</h2>
        <h3 className="text-lg">{/*product.brand*/}</h3>
        <p>Beskrivning{/*product.description*/}</p>
        <div>{/*product.price*/}199 kr</div>
        <button>Köp</button>
        {/*<div><Amount product={product} /></div>
        <div>
          {product.reviews.map((r, i) => <div key={i}>
            <p>{r.comment}</p>
            <span className="ml-8 text-sm">- {r.reviewerName}</span>
          </div>)}
        </div> */}
      </div>

    </main>
  );
}
