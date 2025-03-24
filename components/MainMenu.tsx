// Component: MainMenu
// Description: Som användare vill jag ha en navigation mellan kategorisidorna så att sidorna ska kännas lättåtkomliga för mig

import { fetchAllCategories } from "@/actions/server-actions";
import React from "react";

export default async function MainMenu() {
  const navItems = await fetchAllCategories();
  return (
    <nav className="main-menu">
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={`/category/${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
