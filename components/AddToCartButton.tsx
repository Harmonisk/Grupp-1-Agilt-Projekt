import Button from "./Button";

export default function AddToCartButton() {
  const handleClick = () => {
	console.log("Button clicked!");
  };

  return (
	<Button className="bg-amber-700 w-32 h-32 border-2">
	  a
	</Button>
  );
}