import React from "react";
import styled from "styled-components";
import { Button as btn } from '../../elements/index';

const StyledButton = styled(btn) `
  padding: 16.5px;
  
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  font-weight: 700;
  color: ${(props) => props.theme.textColorLight};

  background-color: ${(props) => props.theme.buttonColor};

  &:hover {
    background-color: ${(props) => props.theme.buttonHoverColor};
  }
  &:active {
    background-color: ${(props) => props.theme.buttonActiveColor};
  }
`;

export default function Button({ children, minWidth }) {
  return (
    <StyledButton type="button" style={{ minWidth: minWidth }}>{children}</StyledButton>
  );
}
