// Code: GlobalHeader component
// Som användare vill jag kunna navigera mig mellan sidor så att sidorna på webbsidan ska kunna kännas tillgängliga för mig
// Acceptance criteria:
// - A header section that is available globally to all pages exists
// - the global header has a navigation section with links to all major pages
// - the global header contains a cart button
"use client";
import MainMenu from "./MainMenu";
import NavigateToCartButton from "./NavigateToCartButton";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import ToggleMenuButton from "./ToggleMenuButton";
import { useState } from "react";
export default function GlobalHeader() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className="global-header">
      <div className="global-header__container">
        <Link href={"/"} className="global-header__logo">
          <Image
            src="/globe.svg"
            width={24}
            height={24}
            alt="Logotype"
            className="logo--image"
          ></Image>
          <span className="logo--text">Product name</span>
        </Link>
        <MainMenu menuVisible={menuVisible} />
        <SearchBar />
        <div className="global-header__actions">
          <NavigateToCartButton />
          <ToggleMenuButton
            menuVisible={menuVisible}
            setMenuVisible={setMenuVisible}
          />
        </div>
      </div>
    </header>
  );
}
