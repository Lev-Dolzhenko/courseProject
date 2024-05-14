import React from "react";

//images
import homeOne from "../images/homeOne.png";
import homeTwo from "../images/homeTwo.png";
import arrow from "../images/arrow.svg";

const Mortgage = () => {
  return (
    <section className="mortgage">
      <div className="container">
        <div className="mortgage__title">
          <h2 className="title2 title2_mortgage">Ипотека</h2>
        </div>
        <div className="mortgage__row">
          <button className="mortgage__row_item mortgage__row_item-blue">
            <div className="mortgage__row_title">
              <h3 className="title3 title3_mortgage">
                Ипотечные <br />
                программы
              </h3>
            </div>
            <img className="mortgage__row_image" src={homeOne} alt="homeOne" />
          </button>
          <button className="mortgage__row_item mortgage__row_item-pink">
            <div className="mortgage__row_title">
              <h3 className="title3 title3_mortgage">
                Ипотечный <br />
                калькулятор
              </h3>
            </div>
            <img className="mortgage__row_image" src={homeTwo} alt="homeTwo" />
          </button>
          <button className="mortgage__row_item mortgage__row_item-arrow">
            <div className="mortgage__row_title">
              <h3 className="title3 title3_mortgage">Посмотреть еще</h3>
            </div>
            <svg
              width="68.000000"
              height="13.000000"
              viewBox="0 0 68 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs />
              <path
                id="Arrow 4"
                d="M63.58 5L59.63 1.05C59.24 0.65 59.24 0.03 59.63 -0.37C60.03 -0.76 60.65 -0.76 61.05 -0.37L66.7 5.29C67.1 5.68 67.1 6.31 66.7 6.7L61.05 12.36C60.65 12.75 60.03 12.75 59.63 12.36C59.24 11.96 59.24 11.34 59.63 10.94L63.58 7L0 7L0 5L63.58 5Z"
                fill="#FFFFFF"
                fillOpacity="1.000000"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mortgage;
