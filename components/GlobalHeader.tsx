// Code: GlobalHeader component
// Som användare vill jag kunna navigera mig mellan sidor så att sidorna på webbsidan ska kunna kännas tillgängliga för mig
// Acceptance criteria:
// - A header section that is available globally to all pages exists
// - the global header has a navigation section with links to all major pages
// - the global header contains a cart button

import MainMenu from "./MainMenu";
import NavigateToCartButton from "./NavigateToCartButton";
import Link from "next/link";
import Image from "next/image";
import ToggleMenuButton from "./ToggleMenuButton";
export default function GlobalHeader() {
  return (
    <header className="global-header">
      <div className="global-header__container">
        <Link href={"/"} className="global-header__logo">
          <Image
            src="/globe.svg"
            width={24}
            height={24}
            alt="Logotype"
            className="logo__image"
          ></Image>
          Product name
        </Link>
        <ToggleMenuButton />
        <MainMenu />
        <NavigateToCartButton />
      </div>
    </header>
  );
}
