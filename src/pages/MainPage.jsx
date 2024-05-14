import React from "react";

//sections
import Header from "../sections/Header";
import Benefits from "../sections/Benefits";
import Mortgage from "../sections/Mortgage";
import Variants from "../sections/Variants";
import About from "../sections/About";
import Team from "../sections/Team";
import Call from "../sections/Call";
import Info from "../sections/Info";
import Map from "../sections/Map";
import Footer from "../sections/Footer";

const MainPage = () => {
  return (
    <>
      <Header />
      <Benefits />
      <Mortgage />
      <Variants />
      <About />
      <Team />
      <Call />
      <Info />
      <Map />
      <Footer />
    </>
  );
};

export default MainPage;
