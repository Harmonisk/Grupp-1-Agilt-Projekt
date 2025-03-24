// Component: PageHeader
// Description: Som användare vill jag ha en rubrik för sidan jag är på så att jag enkelt kan tyda syftet för en enskild sida.

import React from "react";

export default function PageHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="page-header">
      <h1>{children}</h1>
    </section>
  );
}
