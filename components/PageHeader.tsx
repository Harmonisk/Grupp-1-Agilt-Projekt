import React from "react";

export default function PageHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>{children}</h1>
    </section>
  );
}
