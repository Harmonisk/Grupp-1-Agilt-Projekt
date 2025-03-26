import GlobalFooter from "@/components/GlobalFooter";
import GlobalHeader from "@/components/GlobalHeader";
import Main from "@/components/Main";


export default async function CategoryPage({params}:{params: Promise<{name: string}>}){
    const name:string = (await params).name;
    return(
        <>
            <Main>
                <h2>Category page for {name}</h2>
            </Main>
        </>
    );
}