import styled from "styled-components";

export const StyledBenefitCard = styled.article `
  min-height: 197px;
  padding: 20px;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;

  background-color: #E1EDCE;
  box-sizing: border-box;
`;

export const CardHeader = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
