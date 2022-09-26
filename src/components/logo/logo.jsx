import React from "react";
import logo from '../../assets/logo.svg';
import styled from "styled-components";

const LogoLink = styled.a `
  display: flex;
  align-items: center;
  
  text-decoration: none;
`;

const LogoText = styled.span `
  margin-left: 44px;

  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
  color: ${(props) => props.theme.textColorDark};
`;

export default function Logo() {
  return (
    <LogoLink href="index.html">
      <img src={logo} alt="logo" />
      <LogoText>Фермерские продукты</LogoText>
    </LogoLink>
  );
}
