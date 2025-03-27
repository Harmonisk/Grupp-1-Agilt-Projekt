import React from "react";

type IconProps = {
  className?: string;
  type?: "home" | "test";
};

export default function Icon({ type }: IconProps) {
  const classes = `icon material-symbols-sharp`;
  return <span className={classes}>{type}</span>;
}
