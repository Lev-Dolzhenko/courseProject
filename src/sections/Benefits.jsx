import React from "react";

//components

import BenefitsItem from "../components/BenefitsItem";

//images
import homeIcon from "../images/homeIcon.svg";
import soundIcon from "../images/soundIcon.svg";
import peopleIcon from "../images/peopleIcon.svg";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits__row">
          <BenefitsItem
            icon={homeIcon}
            text={"Поможем со скорейшей продажей вашей квартиры"}
          />
          <BenefitsItem
            icon={soundIcon}
            text={"Занимаемся сопровождением ипотечной программы"}
          />
          <BenefitsItem
            icon={peopleIcon}
            text={
              "Мы дорожим своей репутацией и работаем для вас 7 дней в неделю!"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
