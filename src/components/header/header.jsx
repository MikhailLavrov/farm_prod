import React from "react";
import Logo from "../logo/logo";
import Nav from "../nav/nav";
import styled from "styled-components";

const StyledHeader = styled.header `
  padding: 10px 90px;
  
  display: flex;
  align-items: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}
