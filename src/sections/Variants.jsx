import React from "react";

//components
import VariantsItem from "../components/VariantsItem";

//images
import cardImage from "../images/imageCard.jpeg";
import cardImageCover from "../images/imageCardCover.jpeg";

import { Link } from "react-router-dom";

const Variants = () => {
  return (
    <section className="variants">
      <div className="container">
        <div className="variants__title">
          <h2 className="title2 title2_variants">Лучшие варианты</h2>
        </div>
        <div className="variants__row">
          <Link to="/infoPage">
            <VariantsItem
              title={"ЖК “Атланта”"}
              desc={"2-комнатная квартира, 51.8 м², Орынбор 10"}
              price={"40 млн ₸"}
              img={cardImage}
            />
          </Link>
          <Link to="/infoPage">
            <VariantsItem
              title={"ЖК “Атланта”"}
              desc={"2-комнатная квартира, 51.8 м², Орынбор 10"}
              price={"40 млн ₸"}
              img={cardImage}
            />
          </Link>
          <Link to="/infoPage">
            <VariantsItem
              title={"ЖК “Атланта”"}
              desc={"2-комнатная квартира, 51.8 м², Орынбор 10"}
              price={"40 млн ₸"}
              img={cardImage}
            />
          </Link>
          <Link to="/infoPage">
            <VariantsItem
              title={"ЖК “Атланта”"}
              desc={"2-комнатная квартира, 51.8 м², Орынбор 10"}
              price={"40 млн ₸"}
              img={cardImage}
            />
          </Link>
          <Link to="/infoPage">
            <VariantsItem
              title={"ЖК “Атланта”"}
              desc={"2-комнатная квартира, 51.8 м², Орынбор 10"}
              price={"40 млн ₸"}
              img={cardImage}
            />
          </Link>
          <div className="variant__item-cover">
            <Link to="/catalog">
              <img
                className="variannt__item_image-cover"
                src={cardImageCover}
                alt="imageCardCover"
              />
              <button className="variannt__item_button-cover">
                Посмотреть <br />
                еще
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Variants;
