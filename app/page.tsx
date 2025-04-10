//Component: LandingPage
//Description:

import Container from "@/components/Container";
import GlobalFooter from "@/components/GlobalFooter";
import GlobalHeader from "@/components/GlobalHeader";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import ProductList from "@/components/ProductList";
import SubHeadline from "@/components/SubHeadline";

export default function Home() {
  return (
    <>
      <Main>
        <Hero />
        <SubHeadline>Featured products</SubHeadline>
        <Container>
          <ProductList featured={true}></ProductList>
        </Container>
      </Main>
    </>
  );
}
