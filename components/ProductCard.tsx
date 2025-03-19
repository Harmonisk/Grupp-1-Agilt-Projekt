
export default function ProductCard() {
	return (
		<div className="w-32 h-48 bg-amber-400 rounded-lg overflow-hidden">
			<div className="h-1/2 bg-amber-400"></div>
			<div className="h-1/2 bg-blue-400 p-2 flex flex-col justify-between">
				<h2 className="flex-1 break-words leading-relaxed">CardCardCardCard</h2>
				<h2 className="flex-1/4 leading-relaxed" >a</h2>
				<h2 className="flex-1/4 ">b</h2>
			</div>
		</div>
	);
}