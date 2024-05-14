import React from "react";

//images
import imageBuild from "../images/imageBuild.jpeg";
import imageBuildCover from "../images/imageBuildCover.jpeg";
import arrowBuild from "../images/arrowPrograms.svg";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container">
        <div className="programs__title">
          <h2 className="title2 title2_programs">Ипотечные программы</h2>
        </div>
        <div className="programs__row">
          <div className="programs__item">
            <div className="programs__item_image">
              <img src={imageBuild} alt="imageBuild" />
            </div>
            <div className="programs__item_info">
              <div className="programs__info_title">
                <h5 className="title5 title5_programs">
                  Жилищный кредит от Сбербанка
                </h5>
              </div>
              <div className="programs__info_percentages">
                <div className="programs__info_percentages_first">
                  <span>Первонач. взнос</span>
                  <strong>от 10%</strong>
                </div>
                <div className="programs__info_percentages_bet">
                  <span>Ставка</span>
                  <strong>от 9.99%</strong>
                </div>
              </div>
              <div className="programs__info_buttons">
                <button className="programs__info_button">Подробнее</button>
                <button className="programs__info_button">Сертификат</button>
              </div>
            </div>
          </div>
          <div className="programs__item">
            <div className="programs__item_image">
              <img src={imageBuild} alt="imageBuild" />
            </div>
            <div className="programs__item_info">
              <div className="programs__info_title">
                <h5 className="title5 title5_programs">
                  Цифровая ипотека от Freedom Finance
                </h5>
              </div>
              <div className="programs__info_percentages">
                <div className="programs__info_percentages_first">
                  <span>Первонач. взнос</span>
                  <strong>от 20%</strong>
                </div>
                <div className="programs__info_percentages_bet">
                  <span>Ставка</span>
                  <strong>от 9.99%</strong>
                </div>
              </div>
              <div className="programs__info_buttons programs__info_buttons_one">
                <button className="programs__info_button">Подробнее</button>
              </div>
            </div>
          </div>
          <div className="programs__item_cover">
            <img
              src={imageBuildCover}
              alt="imageBuildCover"
              className="programs__item_cover-img"
            />
            <button className="programs__item_cover-button">
              Посмотреть еще
              <img src={arrowBuild} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
