//Component: LandingPage
//Description:

import Container from "@/components/Container";
import GlobalFooter from "@/components/GlobalFooter";
import GlobalHeader from "@/components/GlobalHeader";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import SubHeadline from "@/components/SubHeadline";

export default function Home() {
  return (
    <>
      <GlobalHeader />

      <Hero></Hero>
      <Main>
        <SubHeadline>Featured products</SubHeadline>
        <Container>{/* <ProductList></ProductList> */}Productlist</Container>
      </Main>

      <GlobalFooter />
    </>
  );
}
