import React from "react";
import './style.css';

import Title3 from '../title3/title3';
import Category from "../category/category";

export default function BenefitCard({category, color, title, text, image}) {
  return (
    <article className="benefit-card" style={{backgroundColor: color}}>
      <img src={image} width={52} height={52} alt="benefit" />
      <div className="benefit-card__header">
        <Category bgColor={'#88AA4D'}>{category}</Category>
        <Title3>{title}</Title3>
      </div>
      <p className="benefit-card__text" dangerouslySetInnerHTML={{__html: text}} />
    </article>
  );
}
