// Type: Component
// Description:
// Button component that takes children and an onClick function
// Additional comment

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string; // We add the className prop to allow for custom styling
  onClick?: () => void;
};
export default function Button({ children, onClick, className }: ButtonProps) {
  // We add the 'button' class to the button to easily style all buttons via Tailwind CSS
  const classes = `button ${className}`;
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
