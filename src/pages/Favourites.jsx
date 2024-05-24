import React from "react";
import AbsItem from "../components/AbsItem";
import HeaderNav from "../components/HeaderNav";
import Footer from "../sections/Footer";

const Favourites = () => {
  return (
    <>
      <HeaderNav isWrap={true} />
      <section className="favourites">
        <div className="container">
          <div className="favourites__title">
            <h2 className="title2">Избранное</h2>
          </div>
          <div className="favourites__list">
            <AbsItem />
            <AbsItem />
            <AbsItem />
            <AbsItem />
            <AbsItem />
            <AbsItem />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Favourites;
