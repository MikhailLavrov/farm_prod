import React from "react";
import "./style.css";

export default function Logo() {
  return (
    <a className="logo__link" href="index.html">
      <img src='src/assets/logo.svg' alt="logo" />
      <span className="logo__text">Фермерские продукты</span>
    </a>
  );
}
