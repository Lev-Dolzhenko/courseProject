import React, { useState } from "react";

//images
import arrowIcon from "../images/arrowIcon.svg";
import HeaderNav from "../components/HeaderNav";
import { Link } from "react-router-dom";

const Header = ({ isForm = true }) => {
  const [apartamentData, setApartamentData] = useState({
    city: "Нур-Султан",
    square: "60м",
    rooms: "1",
    price: "20",
  });

  const handleChangeCity = (event) => {
    const { value } = event.target;
    setApartamentData((prevState) => ({ ...prevState, city: value }));
    console.log(apartamentData);
  };

  const handleChangeSquare = (event) => {
    const { value } = event.target;
    setApartamentData((prevState) => ({ ...prevState, square: value }));
    console.log(apartamentData);
  };

  const handleChangeRooms = (event) => {
    const { value } = event.target;
    setApartamentData((prevState) => ({ ...prevState, rooms: value }));
    console.log(apartamentData);
  };

  const handleChangePrice = (event) => {
    const { value } = event.target;
    setApartamentData((prevState) => ({ ...prevState, price: value }));
    console.log(apartamentData);
  };

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
                    {/* <span className="header__search_input-placeholder">
                      Город, район
                    </span>
                    <span className="header__search_input-answer">
                      Нур-Султан
                    </span> */}
                    <label
                      className="header__search_input-placeholder"
                      for="city-select"
                    >
                      Город, район
                    </label>
                    <select
                      className="header__search_input-answer"
                      name="pets"
                      id="city-select"
                      onChange={handleChangeCity}
                    >
                      <option value="Нур-Султан">Нур-Султан</option>
                      <option value="Москва">Москва</option>
                      <option value="Санкт-Петербург">Санкт-Петербург</option>
                      <option value="Кострома">Кострома</option>
                      <option value="Омск">Омск</option>
                      <option value="Волгоград">Волгоград</option>
                      <option value="Одинцово">Одинцово</option>
                    </select>
                  </div>
                  {/* <div className="header__search_input_arrow">
                    <button>
                      <img src={arrowIcon} alt="arrowIcon" />
                    </button>
                  </div> */}
                </div>
                <div className="header__search_input header__search_input-square">
                  <div className="header__search_input_text">
                    {/* <span className="header__search_input-placeholder">
                      Площадь
                    </span>
                    <span className="header__search_input-answer">120м</span> */}
                    <label
                      className="header__search_input-placeholder"
                      for="square-select"
                    >
                      Площадь
                    </label>
                    <select
                      className="header__search_input-answer"
                      name="pets"
                      id="square-select"
                      onChange={handleChangeSquare}
                    >
                      <option value="60м">60м</option>
                      <option value="80м">80м</option>
                      <option value="100м">100м</option>
                      <option value="120м">120м</option>
                      <option value="140м">140м</option>
                      <option value="160м">160м</option>
                    </select>
                  </div>
                  {/* <div className="header__search_input_arrow">
                    <button>
                      <img src={arrowIcon} alt="arrowIcon" />
                    </button>
                  </div> */}
                </div>
                <div className="header__search_input header__search_input-rooms">
                  <div className="header__search_input_text">
                    {/* <span className="header__search_input-placeholder">
                      Комнатность
                    </span>
                    <span className="header__search_input-answer">2 </span> */}
                    <label
                      className="header__search_input-placeholder"
                      for="rooms-select"
                    >
                      Комнатность
                    </label>
                    <select
                      className="header__search_input-answer"
                      name="pets"
                      id="rooms-select"
                      onChange={handleChangeRooms}
                    >
                      <option value="60м">1</option>
                      <option value="80м">2</option>
                      <option value="100м">3</option>
                      <option value="120м">4</option>
                      <option value="140м">5</option>
                      <option value="160м">6</option>
                    </select>
                  </div>
                  {/* <div className="header__search_input_arrow">
                    <button>
                      <img src={arrowIcon} alt="arrowIcon" />
                    </button>
                  </div> */}
                </div>
                <div className="header__search_input header__search_input-price">
                  <div className="header__search_input_text">
                    {/* <span className="header__search_input-placeholder">
                      Цена
                    </span>
                    <span className="header__search_input-answer">
                      от 30 000 000₽
                    </span> */}
                    <label
                      className="header__search_input-placeholder"
                      for="price-select"
                    >
                      Цена
                    </label>
                    <select
                      className="header__search_input-answer"
                      name="pets"
                      id="price-select"
                      onChange={handleChangePrice}
                    >
                      <option value="20">От 20 млн.руб</option>
                      <option value="25">От 25 млн.руб</option>
                      <option value="30">От 30 млн.руб</option>
                      <option value="35">От 35 млн.руб</option>
                      <option value="40">От 40 млн.руб</option>
                    </select>
                  </div>
                  {/* <div className="header__search_input_arrow">
                    <button>
                      <img src={arrowIcon} alt="arrowIcon" />
                    </button>
                  </div> */}
                </div>
                <Link to={"/catalog"}>
                  <div className="header__search_button">
                    <button>Поиск</button>
                  </div>
                </Link>
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
