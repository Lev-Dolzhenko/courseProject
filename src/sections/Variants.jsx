import React, {useEffect} from "react";

//components
import VariantsItem from "../components/VariantsItem";

//images
import cardImage from "../images/imageCard.jpeg";
import cardImageCover from "../images/imageCardCover.jpeg";

import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Variants = () => {
  const [compelexesFlats, setCompexesFlats] = React.useState([]);
  const naviagte = useNavigate();

  useEffect(() => {
    const getAllFlats = async () => {
      return axios.get("http://176.113.81.99/api/flats").then((resp) => resp.data).catch((err) => console.log(err));
    }

    getAllFlats()
        .then((resp) => {
          setCompexesFlats(resp);
        })
  }, [])

  return (
    <section className="variants">
      <div className="container">
        <div className="variants__title">
          <h2 className="title2 title2_variants">Лучшие варианты</h2>
        </div>
        <div className="variants__row">
          {
            compelexesFlats?.map((flat) => (
                <Link to={"/flats/"+flat?.id} key={flat?.id}>
                  <VariantsItem
                      title={flat?.complex_name}
                      desc={flat?.rooms+"-комнатная квартира"+ flat?.size_m +"м² "+flat?.address}
                      price={flat?.price+" млн ₽"}
                      img={cardImage}
                  />
                </Link>
            ))
          }
          <div className="variant__item-cover" onClick={() => naviagte("/catalog")}>
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
