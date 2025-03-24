

export default async function CategoryPage({params}:{params: Promise<{name: string}>}){
    const name:string = (await params).name;
    return(
        <>
            <h2>Category page for {name}</h2>
        </>
    );
}