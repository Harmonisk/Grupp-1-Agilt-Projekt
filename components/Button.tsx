// Type: Component
// Description:
// Button component that takes children and an onClick function
// Additional comment

import React from "react";

type ButtonProps = {
  children: React.ReactNode; // For passing content like text, icons, etc.
  className?: string; // We add the className prop to allow for custom styling
  onClick?: () => void; // Added for clarity, already passed with React.ButtonHTMLAttributes<HTMLButtonElement>
  "data-toggle"?: boolean; // Define data-toggle as a optional data-attribute
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function Button({
  children,
  onClick,
  className,
  ...rest
}: ButtonProps) {
  // We add the 'button' class to the button to easily style all buttons via Tailwind CSS
  const classes = `button ${className}`;
  return (
    <button onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
