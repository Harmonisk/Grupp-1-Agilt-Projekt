//Component for the subheadline of the page
//Description: Som användare vill jag ha en underrubrik för sektioner av sidor
//så att jag tydligt ser skillnad på sidans sektioner och kan utröna deras syfte.

import React from "react";

export default function SubHeadline({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h2>{children}</h2>;
}
