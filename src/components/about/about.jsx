import React from "react";
import './style.css';

import Title from '../title/title';

export default function About() {
  return (
    <section className="about">
      <div className="about__text-container">
        <Title />
        <p className="about__text">Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.</p>
      </div>
    </section>
  );
}
