import React from "react";

import BenefitCard from "../benefit-card/benefitCard";
import Button from "../button/button";

export default function BenefitsList() {
  return (
    <section>
      <h1>Почему фермерские продукты лучше?</h1>
      <ul>
        <BenefitCard />
      </ul>
      <Button />
    </section>
  );
}
