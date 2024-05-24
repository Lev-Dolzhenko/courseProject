import React from "react";
import AbsItem from "../components/AbsItem";

const Ads = () => {
  return (
    <section className="ads">
      <div className="container">
        <div className="ads__title">
          <h2 className="title2">Продажа квартир в Нур-Султане</h2>
        </div>
        <div className="abs__list">
          <AbsItem />
          <AbsItem />
          <AbsItem />
          <AbsItem />
          <AbsItem />
          <AbsItem />
        </div>
      </div>
    </section>
  );
};

export default Ads;
