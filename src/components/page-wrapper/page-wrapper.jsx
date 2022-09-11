import React from "react";
import "./style.css";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";

export default function PageWrapper({...props}) {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="page-wrapper__main">
        <MainPage {...props}/>
      </main>
      <Footer />
    </div>
  );
}
