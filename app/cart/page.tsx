import Main from "@/components/Main";
import { CartTotal } from "@/components/CartTotal";
import CartList from "@/components/CartList";
import { ClearButton } from "@/components/ClearButton";
import Button from "@/components/Button";

export default function CartPage() {
    return (
        <Main>
            <h2 className="p-4">Cart Page</h2>
            <CartList />
            <CartTotal />
            <div className="flex justify-between">
                <ClearButton />
                <Button>Betala</Button>
            </div>
        </Main>
    );
}