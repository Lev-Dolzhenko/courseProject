import React from "react";

//images
import logotype from "../images/logotypeInfo.png";

const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="info__wrapper">
          <div className="info__wrapper_image">
            <img src={logotype} alt="logotype" />
          </div>
          <div className="info__wrapper_number">
            <span>+1 234 567-89-00</span>
          </div>
          <div className="info__wrapper_subtitle">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae,
              scelerisque tortor neque semper tempus vitae et, et.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
