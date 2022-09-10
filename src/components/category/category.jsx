import React from "react";
import "./style.css";

export const CategoryType = {
  FARM: 'farm',
  MARKET: 'market',
};

export default function Category({ category }) {
  let options;

  switch (category) {
    case CategoryType.FARM:
      options = {
        text: 'Фермерские продукты',
        bgColor: '#88AA4D',
      }
      break;
    case CategoryType.MARKET:
      options = {
        text: 'Магазинные продукты',
        bgColor: '#F75531',
      }
      break;
    default:
      options = {
        text: '',
        bgColor: 'inherit',
      }
      break;
  }

  return options.text ? (
    <span 
      className="category" 
      style={{backgroundColor: options.bgColor}}
    >
      {options.text}
    </span>
  ) : null;
}
