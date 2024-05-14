import React from "react";

const BenefitsItem = ({ icon, text }) => {
  return (
    <div className="benefits__item">
      <img className="benefits__item_image" src={icon} alt="homeIcon" />
      <div className="benefits__item_text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BenefitsItem;
