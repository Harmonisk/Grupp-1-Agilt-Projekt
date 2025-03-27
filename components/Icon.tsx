//Compent: Icon
//Developer have access to all Google Material Icons by passing 'type' equal with eg. 'home'

import React from "react";

type IconProps = {
  className?: string;
  type?: string;
};

export default function Icon({ type, className }: IconProps) {
  const classes = `icon material-symbols-sharp ${className}`;
  return <span className={classes}>{type}</span>;
}
