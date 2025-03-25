import Form from "next/form"

export default function SearchBar() {
    return (<>
        <Form action="/search">
            <input type="search" name="q" placeholder="Sök..." />
            <button type="submit">Sök</button>
        </Form>
    </>)
}