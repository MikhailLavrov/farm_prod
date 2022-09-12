import React from "react";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";
import styled from "styled-components";

const StyledPageWrapper = styled.div `
  max-width: 1280px;
  margin: 0 auto;
`;

const Main = styled.div `
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
`;

export default function PageWrapper({...props}) {
  return (
    <StyledPageWrapper>
      <Header />
      <Main>
        <MainPage {...props}/>
      </Main>
      <Footer />
    </StyledPageWrapper>
  );
}
