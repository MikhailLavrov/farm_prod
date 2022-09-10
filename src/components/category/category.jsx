import React from "react";
import "./style.css";

export default function Category({ children, bgColor }) {
  return (
    <span className="category" style={{backgroundColor: bgColor}}>{children}</span>
  );
}
