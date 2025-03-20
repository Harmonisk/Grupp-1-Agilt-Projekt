// Type: Component
// Description:
// Button component that takes children and an onClick function
// Additional comment

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};
export default function Button({ children, onClick, className}: ButtonProps) {
  // Base styles for the button
  const classes = `rounded-md flex flex-items-center gap-2 ${className}`;
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
