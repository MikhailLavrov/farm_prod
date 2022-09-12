import styled from "styled-components";

export const StyledBenefits = styled.section `
  padding: 100px 90px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledBenefitsList = styled.ul `
  margin: 64px 0;
  padding: 0;
  
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
