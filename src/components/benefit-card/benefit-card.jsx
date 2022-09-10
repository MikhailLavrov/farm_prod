import React from "react";
import './style.css';

import moreTasty from '../../assets/more_tasty.svg';

export default function BenefitCard() {
  return (
    <article className="benefit-card">
      <img src={moreTasty} width={52} height={52} alt="" />
      <div className="benefit-card__header">
        <span className="benefit-card__category">Фермерские продукты</span>
        <h3 className="benefit-card__title">Еда намного вкуснее</h3>
      </div>
      <p className="benefit-card__text">Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники</p>
    </article>
  );
}
