// Component: MainMenu
// Description: Som användare vill jag ha en navigation mellan kategorisidorna så att sidorna ska kännas lättåtkomliga för mig

import { fetchAllCategories } from "@/actions/server-actions";
import Category from "@/interfaces/category";
import Link from "next/link";
import React from "react";

export default async function MainMenu() {
  const navItems: Category[] = await fetchAllCategories();
  return (
    <nav className="main-menu">
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
