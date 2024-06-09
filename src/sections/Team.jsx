import React, {useEffect} from "react";

//components
import TeamItem from "../components/TeamItem";

//images
import imagePerson from "../images/imagePerson.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import axios from "axios";

const Team = () => {
   const [currentTeamList, setCurrentTeamList] = React.useState([]);

   useEffect(() => {

       const getAllEmployees = async () => {
           return axios.get("http://176.113.81.99/api/employees/all").then((resp) => resp.data).catch((err) => console.log(err));
       }

       getAllEmployees()
           .then((resp) => {
               setCurrentTeamList(resp)
           })
           .catch((err) => console.log(err));

   }, [])

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
            {
                currentTeamList?.map((employee) => (
                    <SwiperSlide>
                        <TeamItem
                            name={employee?.name}
                            number={employee?.phone}
                            image={"http://176.113.81.99/assets/"+employee?.photo_url}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
