import Image from "next/image";
import Link from "next/link";
import { fetchSingleProduct } from "@/actions/server-actions";
import AddToCartButton from "@/components/AddToCartButton";

export default async function Product({ id }: {id: number}) {
    const product = await fetchSingleProduct(id);

    return (
        <div className="flex flex-col gap-4 border m-4 p-2 md:flex-row">

            <div>
                <Link href={product.images[0]}>
                    <Image
                        className="w-60 h-90 object-cover"
                        width={240} height={360}
                        src={product.images[0]}
                        alt={`Bild på ${product.title}`}
                        priority />
                </Link>
            </div>

            <div className="flex flex-col gap-2 pr-4">
                <h2 className="text-xl">{product.title}</h2>
                <h3 className="text-lg">{product.brand}</h3>
                <p>{product.description}</p>
                <div>{product.price} kr</div>
                <AddToCartButton product={product} />
            </div>

        </div>
    );
}
