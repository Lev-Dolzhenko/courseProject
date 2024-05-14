import React from "react";

//images
import logotype from "../images/logotype.svg";
import heartIcon from "../images/heartIcon.svg";

const HeaderNav = ({ isWrap = false }) => {
  return (
    <>
      {isWrap ? (
        <div className="container">
          <div className="header__row">
            <div className="header__row_logotype">
              <img src={logotype} alt="logotype" />
            </div>
            <div className="header__row_numbers">
              <span className="header__row_number"> +1 234 567-89-00 </span>
              <span className="header__row_number"> +1 234 567-89-00 </span>
            </div>
            <div className="header__row_button">
              <button>
                <img src={heartIcon} alt="heartIcon" />
                Избранное
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="header__row">
          <div className="header__row_logotype">
            <img src={logotype} alt="logotype" />
          </div>
          <div className="header__row_numbers">
            <span className="header__row_number"> +1 234 567-89-00 </span>
            <span className="header__row_number"> +1 234 567-89-00 </span>
          </div>
          <div className="header__row_button">
            <button>
              <img src={heartIcon} alt="heartIcon" />
              Избранное
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderNav;
