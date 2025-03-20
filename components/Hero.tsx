//Component: Hero
//Description:
//Cecilia vill ha en introduktion till sidan när hon först landar på den så att hon kan få en uppfattning om vad sidan går ut på och få en uppmaning om hur hon ska gå vidare.
"https://docs.google.com/document/d/1JOHIbR7N138nmvadSs7jaZGplh4xJQa2Xozrw4snhoM/edit?tab=t.0#heading=h.xoy9xlv7gr1w";

"use client";

import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="hero">
      <h1>Welcome to this amazing store.</h1>
      <p>Here you find all things that you almost need.</p>
      <Button
        onClick={() => console.log("Button clicked")}
        className="rounded-md bg-blue-500 text-white"
      >
        Come on shooping!
      </Button>
    </div>
  );
}
