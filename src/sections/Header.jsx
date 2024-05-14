import React from "react";

//images
import arrowIcon from "../images/arrowIcon.svg";
import HeaderNav from "../components/HeaderNav";

const Header = ({ isForm = true }) => {
  return (
    <>
      {isForm ? (
        <header className="header">
          <div className="container">
            <HeaderNav />
            <div className="header__wrapper">
              <div className="header__title">
                <h1 className="title1 title1_header">
                  Найди недвижимость своей мечты
                </h1>
              </div>
              <div className="header__subtitle">
                <span>Легкий способ купить и продать вашу недвижимость</span>
              </div>
              <div className="header__search">
                <div className="header__search_input header__search_input-city">
                  <div className="header__search_input_text">
                    <span className="header__search_input-placeholder">
                      Город, район
                    </span>
                    <span className="header__search_input-answer">
                      Нур-Султан
                    </span>
                  </div>
                  <div className="header__search_input_arrow">
                    <button>
                      <img src={arrowIcon} alt="arrowIcon" />
                    </button>
                  </div>
                </div>
                <div className="header__search_input header__search_input-square">
                  <div className="header__search_input_text">
                    <span className="header__search_input-placeholder">
                      Площадь
                    </span>
                    <span className="header__search_input-answer">120м</span>
                  </div>
                  <div className="header__search_input_arrow">
                    <button>
                      <img src={arrowIcon} alt="arrowIcon" />
                    </button>
                  </div>
                </div>
                <div className="header__search_input header__search_input-rooms">
                  <div className="header__search_input_text">
                    <span className="header__search_input-placeholder">
                      Комнатность
                    </span>
                    <span className="header__search_input-answer">2 </span>
                  </div>
                  <div className="header__search_input_arrow">
                    <button>
                      <img src={arrowIcon} alt="arrowIcon" />
                    </button>
                  </div>
                </div>
                <div className="header__search_input header__search_input-price">
                  <div className="header__search_input_text">
                    <span className="header__search_input-placeholder">
                      Цена
                    </span>
                    <span className="header__search_input-answer">
                      от 30 000 000 ₸
                    </span>
                  </div>
                  <div className="header__search_input_arrow">
                    <button>
                      <img src={arrowIcon} alt="arrowIcon" />
                    </button>
                  </div>
                </div>
                <div className="header__search_button">
                  <button>Поиск</button>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header className="header header_calculator">
          <div className="container">
            <HeaderNav />
            <div className="header__wrapper header__wrapper_calculator">
              <div className="header__title">
                <h1 className="title1 title1_header">
                  Найди недвижимость своей мечты
                </h1>
              </div>
              <div className="header__subtitle">
                <span>Легкий способ купить и продать вашу недвижимость</span>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
