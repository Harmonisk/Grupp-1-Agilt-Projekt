import Main from "@/components/Main";
import { CartTotal } from "@/components/CartTotal";
import CartList from "@/components/CartList";
import { ClearButton } from "@/components/ClearButton";
import Button from "@/components/Button";

export default function CartPage() {
    return (
        <Main>
            <h2>Cart Page</h2>
            <CartTotal />
            <Button>Betala</Button>
            <ClearButton />
            <CartList />
        </Main>
    );
}