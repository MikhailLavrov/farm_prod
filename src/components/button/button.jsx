import React from "react";
import "./style.css";

export default function Button({ children, minWidth }) {
  return (
    <button type="button" style={{ minWidth: minWidth }} className="button">{children}</button>
  );
}
