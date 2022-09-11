import React from "react";
import './style.css';

import BenefitCard from '../benefit-card/benefit-card';
import Button from "../button/button";
import Title2 from "../title2/title2";

export default function BenefitsList({benefits}) {
  return (
    <section 
      className="benefits"
    >
      <Title2>Почему фермерские продукты лучше?</Title2>
      <ul
        className="benefits__list"
      >
        {benefits.map((benefit) => (
          <li 
            key={benefit.id} 
            className="benefits__item"
          >
            <BenefitCard {...benefit}/>
          </li>
        ))}
      </ul>
      <Button 
        minWidth={260}
      >Купить</Button>
    </section>
  );
}
