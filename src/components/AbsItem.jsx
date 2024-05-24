import React from "react";

//images

import absItemImg from "../images/absItem.jpeg";
import logoCompany from "../images/rieltorLogo.svg";
import heartIcon from "../images/heartIcon.svg";

const AbsItem = () => {
  return (
    <div className="abs__item">
      <div className="abs__image">
        <img src={absItemImg} alt="absItemImg" />
      </div>
      <div className="abs__text">
        <h3 className="abs__text_name">Atlant</h3>
        <div className="abs__text_price">
          <strong>40 000 000 ₸</strong>
          <span>766 000 ₸/м²</span>
        </div>
        <div className="abs__text_info">
          <strong>2 ком., 48 м², 6 этаж из 8</strong>
        </div>
        <div className="abs__text_street">
          <span>Есильский район, ул. Сарайшык, 4</span>
        </div>
        <div className="abs__text_rieltor">
          <div className="abs__text_rieltor-logotype">
            <img src={logoCompany} alt="logoCompany" />
          </div>
          <strong>Арманов Арман Арманович</strong>
          <span>Риелтор</span>
        </div>
        <button className="abs__button_check">Просмотреть</button>
      </div>
      <button className="abs__button_like">
        <svg
          width="36.000000"
          height="36.000000"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs />
          <rect
            id="Geometric, Abstract/Heart"
            width="36.000000"
            height="36.000000"
            fill="rgb(98, 98, 98)"
            fill-opacity="0"
          />
          <path
            id="Path"
            d="M31.5 14.63C31.5 23.08 18.24 30 18 30C17.75 30 4.5 23.08 4.5 14.63C4.5 10.47 7.69 6 12.45 6C15.17 6 16.96 7.35 18 8.56C19.03 7.35 20.82 6 23.54 6C28.3 6 31.5 10.47 31.5 14.63Z"
            stroke="rgb(98, 98, 98)"
            stroke-opacity="1.000000"
            stroke-width="2.000000"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default AbsItem;
