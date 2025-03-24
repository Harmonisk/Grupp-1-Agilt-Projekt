import Button from "./Button";

export function ClearButton() {
/*    const pc = useProductContext();

    const onClick = () => {
        for (const p of pc.cart) {
            pc.setAmount(p, 0);
        }
    }*/
   
    // Add to Button: onClick={onClick}
    return (
        <Button>Töm kundkorg</Button>
    )
}