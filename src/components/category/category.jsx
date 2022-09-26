import React from "react";
import styled from "styled-components";

const CategoryName = styled.span `
  padding: 2px 10px;
  
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.textColorLight};
`;

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
    <CategoryName 
      style={{backgroundColor: options.bgColor}}
    >
      {options.text}
    </CategoryName>
  ) : null;
}
