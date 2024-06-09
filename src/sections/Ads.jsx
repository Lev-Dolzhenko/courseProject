import React, {useEffect} from "react";
import AbsItem from "../components/AbsItem";
import axios from "axios";

const Ads = () => {
  const [currentFlatsDetailed, setFlatsDetailed] = React.useState();

  useEffect(() => {
    const getAllFlatsDetailed = async () => {
      return axios.get("http://176.113.81.99/api/flats/detailed").then((resp) => resp.data).catch((err) => console.log(err));
    }

    getAllFlatsDetailed()
        .then((resp) => {
          setFlatsDetailed(resp);
        })
        .catch((err) => console.log(err));
  }, []);

  return (
    <section className="ads">
      <div className="container">
        <div className="ads__title">
          <h2 className="title2">Продажа квартир в Нур-Султане</h2>
        </div>
        <div className="abs__list">
          {
            currentFlatsDetailed?.map((flat) => (
              <AbsItem
                  key={flat?.id}
                  id={flat?.id}
                  title={flat?.complex?.complex_name}
                  price={flat?.price}
                  ppm={flat?.ppm}
                  rooms={flat?.rooms}
                  size_m={flat?.size_m}
                  floor={flat?.floor}
                  max_floor={flat?.complex?.max_floor}
                  address={flat?.complex?.address}
                  realtor_name={flat?.complex?.realtor_name}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Ads;
