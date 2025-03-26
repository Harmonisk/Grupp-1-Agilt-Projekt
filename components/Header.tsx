
export default function Header({ title }: { title: string }) {
	return (
		<div className="header">
			<h1>{title}</h1>
		</div>
	)
}