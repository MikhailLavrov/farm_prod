import React from "react";
import "./style.css";

import BenefitCard from "../../ui/benefit-card/BenefitCard";
import Button from "../../ui/button/Button";

export default function Benefits() {
  return (
    <>
      <h1>Почему фермерские продукты лучше?</h1>
      <ul>
        <BenefitCard />
      </ul>
      <Button />
    </>
  );
}
