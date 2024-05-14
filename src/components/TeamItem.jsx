import React from "react";

// Import Swiper React components
import { SwiperSlide } from "swiper/react";

const TeamItem = ({ name, number, image }) => {
  return (
    <SwiperSlide>
      <div className="team__wrapper">
        <div className="team__image">
          <img src={image} alt="imagePerson" />
        </div>
        <div className="team__name">
          <span>{name}</span>
        </div>
        <div className="team__number">
          <span>{number}</span>
        </div>
        <div className="team__button">
          <button>Связаться</button>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default TeamItem;
