import React from "react";
import Title1 from '../title1/title1';
import { StyledAbout, TextContainer } from "./styled";
import { P as Text } from '../../elements/index';

export default function About() {
  return (
    <StyledAbout>
      <TextContainer>
        <Title1>Магазин фермерских продуктов с доставкой</Title1>
        <Text>Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.</Text>
      </TextContainer>
    </StyledAbout>
  );
}
