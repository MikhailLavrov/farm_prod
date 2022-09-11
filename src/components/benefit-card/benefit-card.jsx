import React from "react";
import './style.css';
import Title3 from '../title3/title3';
import Category from "../category/category";

const farmCardColor = '#E1EDCE';
const marketCardColor = '#F8DDD7';

export default function BenefitCard({image, category, title, text}) {
  let bgCard;

  if (category === 'farm') {
    bgCard = farmCardColor;
  }
  if (category === 'market') {
    bgCard = marketCardColor;
  }
  
  return (
    <article 
      className="benefit-card" 
      style={{backgroundColor: bgCard}}
    >
      <img 
        src={image.default}
        width={52} 
        height={52} 
        alt="benefit" 
      />
      <div 
        className="benefit-card__header"
      >
        <Category 
          category={category} 
        />
        <Title3>
          {title}
        </Title3>
      </div>
      <p
        className="benefit-card__text" 
      >
        {text}
      </p>
    </article>
  );
}
