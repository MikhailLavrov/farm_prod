import React from "react";
import styled from "styled-components";
import Title3 from '../title3/title3';
import Category from "../category/category";
import { StyledBenefitCard, CardHeader } from "./styled";
import { P } from '../../elements/index';

const CardText = styled(P) `
  grid-column: 1/3;
`;
const farmCardColor = '#E1EDCE';
const marketCardColor = '#F8DDD7';
const defaultCardColor = '#0000001c';

export default function BenefitCard({image, category, title, text}) {
  let bgCard;

  switch (category) {
    case 'farm':
      bgCard = farmCardColor;
      break;
    case 'market':
      bgCard = marketCardColor;
      break;
    default:
      bgCard = defaultCardColor;
      break;
  }
  
  return (
    <StyledBenefitCard style={{backgroundColor: bgCard}}>
      <img 
        src={image.default}
        width={52} 
        height={52} 
        alt="benefit" 
      />
      <CardHeader>
        <Category category={category} />
        <Title3>{title}</Title3>
      </CardHeader>
      <CardText>{text}</CardText>
    </StyledBenefitCard>
  );
}
