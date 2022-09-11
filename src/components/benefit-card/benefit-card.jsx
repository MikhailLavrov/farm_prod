import React from "react";
import './style.css';

import Title3 from '../title3/title3';
import Category from "../category/category";

export default function BenefitCard({color, image, category, title, text}) {

  return (
    <article 
      className="benefit-card" 
      style={{backgroundColor: color}}
    >
      <img 
        // src={require(image)} 
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
