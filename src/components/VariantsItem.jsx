import React from "react";

const VariantsItem = ({ title, desc, price, img }) => {
  return (
    <div className="variants__item">
      <div className="variants__item_image">
        <img src={img} alt="imageCard" />
      </div>
      <div className="variants__item_title">
        <h5 className="title5 title5_variants">{title}</h5>
      </div>
      <div className="variants__item_subtitle">
        <p>{desc}</p>
      </div>
      <div className="variants__item_wrapper">
        <span className="variants__item_price">{price}</span>
        <button className="variants__item_button">Подробнее</button>
      </div>
    </div>
  );
};

export default VariantsItem;
