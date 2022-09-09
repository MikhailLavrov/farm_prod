import React from "react";
import './style.css';

import Logo from "../logo/logo";

export default function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <span className="footer__text">Создано 2021</span>
    </footer>
  );
}
