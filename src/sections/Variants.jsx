import React from "react";

//components
import VariantsItem from "../components/VariantsItem";

//images
import cardImage from "../images/imageCard.jpeg";
import cardImageCover from "../images/imageCardCover.jpeg";

const Variants = () => {
  return (
    <section className="variants">
      <div className="container">
        <div className="variants__title">
          <h2 className="title2 title2_variants">Лучшие варианты</h2>
        </div>
        <div className="variants__row">
          <VariantsItem
            title={"ЖК “Атланта”"}
            desc={"2-комнатная квартира, 51.8 м², Орынбор 10"}
            price={"40 млн ₸"}
            img={cardImage}
          />
          <VariantsItem
            title={"ЖК “Атланта”"}
            desc={"2-комнатная квартира, 51.8 м², Орынбор 10"}
            price={"40 млн ₸"}
            img={cardImage}
          />
          <VariantsItem
            title={"ЖК “Атланта”"}
            desc={"2-комнатная квартира, 51.8 м², Орынбор 10"}
            price={"40 млн ₸"}
            img={cardImage}
          />
          <VariantsItem
            title={"ЖК “Атланта”"}
            desc={"2-комнатная квартира, 51.8 м², Орынбор 10"}
            price={"40 млн ₸"}
            img={cardImage}
          />
          <VariantsItem
            title={"ЖК “Атланта”"}
            desc={"2-комнатная квартира, 51.8 м², Орынбор 10"}
            price={"40 млн ₸"}
            img={cardImage}
          />
          <div className="variant__item-cover">
            <img
              className="variannt__item_image-cover"
              src={cardImageCover}
              alt="imageCardCover"
            />
            <button className="variannt__item_button-cover">
              Посмотреть <br />
              еще
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Variants;
