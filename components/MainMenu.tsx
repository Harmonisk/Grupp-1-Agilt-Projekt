// Component: MainMenu
// Description: Som användare vill jag ha en navigation mellan kategorisidorna så att sidorna ska kännas lättåtkomliga för mig

import { fetchAllCategories } from "@/actions/server-actions";
import Category from "@/interfaces/category";
import Link from "next/link";
import React from "react";

type MainMenuProps = {
  menuVisible: boolean;
};

export default async function MainMenu({ menuVisible }: MainMenuProps) {
  const navItems: Category[] = await fetchAllCategories();
  return (
    <nav className="main-menu" data-toggle={menuVisible ? "true" : "false"}>
      <ul className="main-menu__list">
        {navItems.map((item) => (
          <li key={item.slug} className="main-menu__item">
            <Link href={`/category/${item.slug}`} className="main-menu__link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
