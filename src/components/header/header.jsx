import React from "react";
import "./style.css";
import Logo from "../logo/logo";
import Nav from "../nav/nav";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  );
}
