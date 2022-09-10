import React from "react";
import "./style.css";

import Button from "../button/button";

export default function Nav() {
  return (
    <nav className="navigation">
      <Button minWidth={260}>Купить</Button>
    </nav>
  );
}
