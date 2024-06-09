import React from "react";

//images
import logotype from "../images/logotype.svg";
import heartIcon from "../images/heartIcon.svg";
import { Link } from "react-router-dom";

const HeaderNav = ({ isWrap = false }) => {
  return (
    <>
      {isWrap ? (
        <div className="container">
          <div className="header__row">
            <div className="header__row_logotype">
              <Link to="/">
                <img src={logotype} alt="logotype" />
              </Link>
            </div>

            <div className="header__row_numbers">
              <span className="header__row_number"> +1 234 567-89-00 </span>
              <span className="header__row_number"> +1 234 567-89-00 </span>
            </div>
            <div className="header__row_button">
              <Link to="/favourites">
                <button>
                  <img src={heartIcon} alt="heartIcon" />
                  Избранное
                </button>
              </Link>
              <Link to="/registration">
                <button>Регистрация</button>
              </Link>
              <Link to="/authorization">
                <button>Вход</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="header__row">
          <div className="header__row_logotype">
            <Link to="/">
              <img src={logotype} alt="logotype" />
            </Link>
          </div>
          <div className="header__row_numbers">
            <span className="header__row_number"> +1 234 567-89-00 </span>
            <span className="header__row_number"> +1 234 567-89-00 </span>
          </div>
          <div className="header__row_button">
            <Link to="/favourites">
              <button>
                <img src={heartIcon} alt="heartIcon" />
                Избранное
              </button>
            </Link>
            <Link to="/registration">
              <button>Регистрация</button>
            </Link>
            <Link to="/authorization">
              <button>Вход</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderNav;
