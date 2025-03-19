// Type: Component
// Description:
// Button component that can be used to navigate to a different page or trigger an action.
// It can be used with an icon and a text.
// It can be used with a href to navigate to a different page or without a href to trigger an action.
// It can be used with a disabled prop to disable the button.

import Link from "next/link";
import React from "react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline";
};
export default function Button({
  href,
  icon,
  children,
  onClick,
  size = "medium",
  disabled = false,
  variant = "primary",
}: ButtonProps) {
  const baseStyles = "rounded-md flex";
  const sizeStyles = {
    small: "p-1 text-sm",
    medium: "p-2 text-base",
    large: "p-3 text-lg",
  };
  const variantStyles = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-200 text-gray-800",
    outline: "border border-gray-800 text-gray-800",
  };

  // Lets construct our button classes based on the size and variant.
  const classes = `${baseStyles} ${sizeStyles[size]} ${
    variantStyles[variant]
  } ${disabled ? "opacity-50 cursor-not-allowed" : ""} flex-items-center gap-2`;

  // If href is provided, render a Link component with the href.
  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {icon}
      {children}
    </button>
  );
}
