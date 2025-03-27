"use client";
import React, { useState } from "react";
import Button from "./Button";

export default function ToggleMenuButton() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible((prev) => !prev); // Flip between false/true, if false flip to true and vice versa.
    console.log("Toggled menuVisible:", !menuVisible);
  };

  // Log current state to verify it's being updated
  console.log("Current menuVisible:", menuVisible);

  return (
    <Button
      onClick={handleMenuToggle}
      className="toggle-menu-button"
      data-toggle={menuVisible}
    >
      Toggle menu
    </Button>
  );
}
