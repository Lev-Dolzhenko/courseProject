import React from "react";
import HeaderNav from "../components/HeaderNav";
import Ads from "../sections/Ads";
import Footer from "../sections/Footer";

const Catalog = () => {
  return (
    <>
      <HeaderNav isWrap={true} />
      <Ads />
      <Footer />
    </>
  );
};

export default Catalog;
