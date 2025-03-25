// Code: GlobalHeader component
// Som användare vill jag kunna navigera mig mellan sidor så att sidorna på webbsidan ska kunna kännas tillgängliga för mig
// Acceptance criteria:
// - A header section that is available globally to all pages exists
// - the global header has a navigation section with links to all major pages
// - the global header contains a cart button

import React from "react";
import Container from "./Container";
import MainMenu from "./MainMenu";
import NavigateToCartButton from "./NavigateToCartButton";
// import Button from "./Button";

export default function GlobalHeader() {
  return (
    <header className="global-header">
      <Container>
        <div className="global-header__logo">Product name</div>
        <MainMenu />
        <NavigateToCartButton />
      </Container>
    </header>
  );
}
