import React from "react";

import About from "../../components/about/about";
import BenefitsList from "../../components/benefits-list/benefits-list";

export default function MainPage({benefits}) {
  return (
    <>
      <About />
      <BenefitsList benefits={benefits}/>
    </>
  );
}
