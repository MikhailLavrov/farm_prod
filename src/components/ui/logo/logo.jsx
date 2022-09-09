import React from "react";
import './style.css';

export default function Logo() {
  return (
    <a className="logo" href="index.html">
      <img className="logo__image" src='/src/assets/logo.svg' alt="logo" />
      <span className="logo__text">Фермерские продукты</span>
    </a>
  );
}
