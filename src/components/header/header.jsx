import React from "react";

import Logo from "../logo/logo";
import Nav from "../layout/nav/nav";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  );
}
