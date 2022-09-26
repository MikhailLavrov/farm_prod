import React from "react";
import Logo from "../logo/logo";
import styled from "styled-components";

const StyledFooter = styled.footer `
  min-height: ${(props) => props.theme.HeaderFooterHeight};
  padding: 18px 90px;

  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const FooterText = styled.span `
  margin-left: auto;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <FooterText>Создано 2021</FooterText>
    </StyledFooter>
  );
}
