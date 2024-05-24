import React from "react";

//components
import TeamItem from "../components/TeamItem";

//images
import imagePerson from "../images/imagePerson.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <div className="team__title">
          <h2 className="title2 title2_team">Наша команда</h2>
        </div>
        <Swiper
          loop={true}
          classNameName="swiper mySwiper mySwiper-team"
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            720: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <TeamItem
              name={"Арман Арманович"}
              number={"+123456789"}
              image={imagePerson}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamItem
              name={"Арман Арманович"}
              number={"+123456789"}
              image={imagePerson}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamItem
              name={"Арман Арманович"}
              number={"+123456789"}
              image={imagePerson}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TeamItem
              name={"Арман Арманович"}
              number={"+123456789"}
              image={imagePerson}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamItem
              name={"Арман Арманович"}
              number={"+123456789"}
              image={imagePerson}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
