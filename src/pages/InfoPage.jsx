import React from "react";

//components
import HeaderNav from "../components/HeaderNav";
import Map from "../sections/Map";
import Variants from "../sections/Variants";
import Footer from "../sections/Footer";
import Data from "../sections/Data";

const InfoPage = () => {
  return (
    <>
      <HeaderNav isWrap={true} />
      <Data />
      <Map />
      <Variants />
      <Footer />
    </>
  );
};

export default InfoPage;
