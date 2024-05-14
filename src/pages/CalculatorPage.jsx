import React from "react";

//sections
import Header from "../sections/Header";
import Programs from "../sections/Programs";
import Calculator from "../sections/Calculator";
import Info from "../sections/Info";
import Map from "../sections/Map";
import Footer from "../sections/Footer";

const CalculatorPage = () => {
  return (
    <>
      <Header isForm={false} />
      <Programs />
      <Calculator />
      <Info />
      <Map />
      <Footer />
    </>
  );
};

export default CalculatorPage;
