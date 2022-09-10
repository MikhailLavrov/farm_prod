import React from "react";
import './style.css';

import BenefitCard from '../benefit-card/benefit-card';
import Button from "../button/button";

export default function BenefitsList() {
  return (
    <section className="benefits">
      <h2 className="benefits__title">Почему фермерские продукты лучше?</h2>
      <ul className="benefits__list">
        <BenefitCard />
        <BenefitCard />
        <BenefitCard />
        <BenefitCard />
      </ul>
      <Button />
    </section>
  );
}
