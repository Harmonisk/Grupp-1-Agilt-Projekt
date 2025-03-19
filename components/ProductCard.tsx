import Button from "./Button";

export default function ProductCard() {
	const handleClick = () => {
		console.log("Button clicked!");
	  };
	
	return (
		
		<div className="w-32 h-48 bg-amber-400 rounded-lg overflow-hidden">
			<div className="h-1/2 bg-amber-400"></div>
			<div className="h-1/2 bg-blue-400 p-2 flex flex-col justify-between">
				<h2 className="text-sm leading-4 flex-1 break-words">CardCardCardCard</h2>
				{/* <h2 className="text-sm leading-4 flex-1 break-words">CardCardCard</h2> */}
				<div>

				<h2 className="flex-1/4 leading-4" >70 kr</h2>
				<Button className="bg-amber-700 w-1 h-1 border-2">A</Button>
				</div>
			</div>
		</div>
	);
}