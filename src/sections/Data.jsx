import React, { useState } from "react";

//images
import imageCard from "../images/imageCardCover.jpeg";
import companyLogotype from "../images/companyLogotype.svg";
import telegrammIcon from "../images/telegrammIcon.svg";
import whatsappIcon from "../images/whatsappIcon.svg";
import DataList from "../components/DataList";

const Data = ({}) => {
  const [isShowNum, setIsShowNum] = useState(false);
  return (
    <section className="data">
      <div className="container">
        <div className="data__title">
          <h3 className="title3 title3_data">
            Продажа 2-комнатной квартиры в ЖК Atlant, 48.2 м², г. Нур-Султан,
            Есильский район, ул. Сарайшык
          </h3>
        </div>
        <div className="data__wrapper">
          <div className="data__wrapper_images">
            <div className="data__wrapper_image">
              <img src={imageCard} alt="" />
            </div>
            <div className="data__wrapper_image">
              <img src={imageCard} alt="" />
            </div>
            <div className="data__wrapper_image">
              <img src={imageCard} alt="" />
            </div>
          </div>
          <div className="data__info">
            <div className="data__info_top">
              <div className="data__info_company">
                <div className="data__info_logotype">
                  <img src={companyLogotype} alt="Logotype of company" />
                </div>

                <div className="data__info_person">
                  <span className="data__info_person-name">
                    Арманов Арман Арманович
                  </span>
                  <span className="data__info_person-post">Риелтор</span>
                </div>
              </div>
              <div className={`data__info_number ${isShowNum ? "" : "none"}`}>
                <span>+7 (777) 231-21-32</span>
              </div>
              <div className={`data__info_number ${isShowNum ? "none" : ""}`}>
                <span>+7 (777)</span>
                <button onClick={() => setIsShowNum(true)}>
                  Посмотреть номер
                </button>
              </div>
              <div className="data__info_buttons">
                <button className="data__info_buttons-whatsapp">
                  <svg
                    width="24.000000"
                    height="24.000000"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <rect
                      id="Social, Media/Whatsup"
                      width="24.000000"
                      height="24.000000"
                      fill="#FFFFFF"
                      fill-opacity="0"
                    />
                    <path
                      id="Path"
                      d="M12.03 3.2C7.23 3.2 3.31 7.11 3.31 11.92C3.31 13.44 3.71 14.95 4.48 16.27L3.24 20.79L7.86 19.58C9.14 20.27 10.57 20.64 12.03 20.64L12.03 20.64C16.84 20.64 20.75 16.73 20.75 11.92C20.75 9.59 19.85 7.41 18.2 5.76C16.55 4.11 14.36 3.2 12.03 3.2Z"
                      stroke="#FFFFFF"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path"
                      d="M13.09 13.56L13.5 13.15C13.87 12.78 14.46 12.74 14.89 13.04C15.31 13.33 15.68 13.59 16.03 13.84C16.59 14.22 16.65 15.01 16.17 15.49L15.82 15.85"
                      stroke="#FFFFFF"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Path"
                      d="M8.14 8.17L8.5 7.82C8.98 7.34 9.77 7.4 10.15 7.96C10.4 8.31 10.66 8.68 10.95 9.1C11.26 9.53 11.21 10.12 10.84 10.49L10.43 10.9"
                      stroke="#FFFFFF"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Path"
                      d="M15.82 15.85C14.34 17.32 11.85 16.07 9.88 14.11"
                      stroke="#FFFFFF"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Path"
                      d="M9.88 14.11C7.92 12.14 6.67 9.66 8.14 8.17"
                      stroke="#FFFFFF"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Path"
                      d="M10.43 10.9C10.75 11.4 11.16 11.9 11.62 12.36L11.63 12.37C12.09 12.83 12.59 13.24 13.09 13.56"
                      stroke="#FFFFFF"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                  </svg>
                  Whatsapp
                </button>
                <button className="data__info_buttons-telegram">
                  <svg
                    width="24.000000"
                    height="24.000000"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <rect
                      id="Social, Media/Telegram"
                      width="24.000000"
                      height="24.000000"
                      fill="#FFFFFF"
                      fill-opacity="0"
                    />
                    <path
                      id="Path"
                      d="M11.79 16.9L9.72 18.91C9.37 19.26 8.77 19.1 8.62 18.63L7.25 14.1"
                      stroke="#FFFFFF"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Path"
                      d="M14.1 10.92C14.1 10.92 11.51 13.26 10.18 14.46C9.78 14.82 9.82 15.45 10.25 15.76L15.63 19.74C16.15 20.13 16.91 19.84 17.05 19.2L19.69 6.75C19.82 6.15 19.23 5.64 18.65 5.86L3.14 11.85C2.68 12.02 2.7 12.68 3.17 12.82L7.25 14.1"
                      stroke="#FFFFFF"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                  </svg>
                  Telegram
                </button>
              </div>
              <div className="data__info_button-large">
                <button>Заказать обратный звонок</button>
              </div>
            </div>
            <div className="data__info_bottom">
              <button>Подобрать ипотеку</button>
            </div>
          </div>
        </div>
        <DataList />
      </div>
    </section>
  );
};

export default Data;
