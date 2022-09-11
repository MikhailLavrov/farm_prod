import React from "react";
import "./style.css";
import PageWrapper from "../components/page-wrapper/page-wrapper";
import benefitsList from '../mocks/benefits-list';

export default function App() {
  return (
    <PageWrapper benefits={benefitsList}/>
  );
}
