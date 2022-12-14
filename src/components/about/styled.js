import styled from "styled-components";
import aboutImg from '../../assets/about.svg';

export const StyledAbout = styled.section `
  position: relative;
  min-height: 600px;
  padding: 183px 90px;

  box-sizing: border-box;
  background:
    url(${aboutImg}) bottom right 18% no-repeat,
    url('data:image/svg+xml,%3Csvg width="446" height="447" viewBox="0 0 446 447" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cellipse cx="223" cy="223.5" rx="223" ry="223.5" fill="%23C4E2FF"/%3E%3C/svg%3E%0A') center right 10% no-repeat;

  ::before {
  position: absolute;
  width: 100vw;
  height: 100%;
  content: '';
  background-color: ${(props) => props.theme.colorBlue};
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  }
`;

export const TextContainer = styled.div `
  width: 48%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
