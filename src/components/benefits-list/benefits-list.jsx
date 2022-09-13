import React from "react";
import BenefitCard from '../benefit-card/benefit-card';
import Button from "../button/button";
import Title2 from "../title2/title2";
import { StyledBenefits, StyledBenefitsList } from "./styled";
import { Li as BenefitsItem } from '../../elements/index';

export default function BenefitsList({benefits}) {
  return (
    <StyledBenefits>
      <Title2>Почему фермерские продукты лучше?</Title2>
      <StyledBenefitsList>
        {benefits.map((benefit) => (
          <BenefitsItem key={benefit.id}>
            <BenefitCard {...benefit}/>
          </BenefitsItem>
        ))}
      </StyledBenefitsList>
      <Button minWidth={260}>Купить</Button>
    </StyledBenefits>
  );
}
