//Component: LandingPage
//Description:

import GlobalFooter from "@/components/GlobalFooter";
import Hero from "@/components/Hero";
import SubHeadline from "@/components/SubHeadline";

export default function Home() {
  return (
    <>
      {/* <GlobalHeader></GlobalHeader> */}

      <Hero></Hero>
      <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <SubHeadline>Featured products</SubHeadline>
        {/* <ProductList></ProductList> */}
      </main>

      <GlobalFooter />
    </>
  );
}
