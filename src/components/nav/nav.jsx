import React from "react";
import Button from "../button/button";
import styled from "styled-components";

const StyledNav = styled.nav `
  margin-left: auto;
  
  display: flex;
  align-items: center;
`;

export default function Nav() {
  return (
    <StyledNav>
      <Button minWidth={260}>Купить</Button>
    </StyledNav>
  );
}
