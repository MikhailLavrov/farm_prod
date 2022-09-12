import React from "react";
import styled from "styled-components";
import { Button as btn } from '../../elements/index';

const StyledButton = styled(btn) `
  padding: 16.5px;
  
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
  color: #ffffff;

  background-color: #FC9B27;

  &:hover {
    background-color: #fa8a00;
  }
  &:active {
    background-color: #c66d01;
  }
`;

export default function Button({ children, minWidth }) {
  return (
    <StyledButton type="button" style={{ minWidth: minWidth }}>{children}</StyledButton>
  );
}
