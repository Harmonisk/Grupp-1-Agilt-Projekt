//Component: ToogleMenuButton
//Description: The user can show hide menu on smaller breakpoints
"use client";
import React, { useState } from "react";
import Button from "./Button";

export default function ToggleMenuButton() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible((prev) => !prev); // Flip between false/true, if false flip to true and vice versa.
  };

  return (
    <Button
      onClick={handleMenuToggle}
      className="toggle-menu-button"
      data-toggle={menuVisible}
    >
      <span className="toggle-menu-button__icon"></span> Menu
    </Button>
  );
}
