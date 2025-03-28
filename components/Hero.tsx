//Component: Hero
//Description:
//Cecilia vill ha en introduktion till sidan när hon först landar på den så att hon kan få en uppfattning om vad sidan går ut på och få en uppmaning om hur hon ska gå vidare.
"https://docs.google.com/document/d/1JOHIbR7N138nmvadSs7jaZGplh4xJQa2Xozrw4snhoM/edit?tab=t.0#heading=h.xoy9xlv7gr1w";

"use client";

import React from "react";
import Button from "./Button";
import Icon from "./Icon";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__title">Welcome to this amazing store.</h1>
      <p className="hero__description">
        Here you find all things that you almost need.
      </p>
      <div className="button-wrapper">
        <Link href="/category/fragrances">
        <Button
          onClick={() => console.log("Button clicked")}
          className="hero__button hero__button--primary"
        >
          Let&apos;s
        </Button>
        </Link>
        <Link href="/category/beauty">
        <Button
          onClick={() => console.log("Button clicked")}
          className="hero__button hero__button--primary"
        >
          <Icon type="celebration"></Icon>party!
        </Button>
        </Link>
      </div>
    </div>
  );
}
