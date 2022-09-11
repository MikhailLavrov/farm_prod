import React from "react";
import "./style.css";
import logo from '../../assets/logo.svg';

export default function Logo() {
  return (
    <a className="logo__link" href="index.html">
      <img src={logo} alt="logo" />
      <span className="logo__text">Фермерские продукты</span>
    </a>
  );
}
