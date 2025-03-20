//Component for the main content of the page
//Acceptance Criteria:
//-The component should contain the main content of the page
//-The component should be able to contain other components

import React from "react";

export default function Main({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
