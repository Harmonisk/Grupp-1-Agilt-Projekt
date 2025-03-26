import { fetchAllCategories } from "@/actions/server-actions";
import GlobalFooter from "@/components/GlobalFooter";
import GlobalHeader from "@/components/GlobalHeader";
import Main from "@/components/Main";
import PageHeader from "@/components/PageHeader";
import SelectableProductList from "@/components/SelectableProductList";
import Category from "@/interfaces/category";


export default async function ProductCategoryPage({params}:{params: Promise<{name: string}>}){
    const name:string = (await params).name;
    const categories:Category[] = await fetchAllCategories();
    const category:Category = categories.filter((cat)=>cat.slug===name)[0];
    return(
        <>
            <Main>
                <PageHeader>{category.name}</PageHeader>
                <SelectableProductList category={category} />
            </Main>
        </>
    );
}