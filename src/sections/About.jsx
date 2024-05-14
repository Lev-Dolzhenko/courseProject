import React from "react";

//images
import arrowAbout from "../images/arrowAbout.svg";
import imageAbout from "../images/imageAbout.jpeg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__text">
            <div className="about__text_title">
              <h3 className="title3 title3_about">О “КупиДом”</h3>
            </div>
            <div className="about__text_subtitle">
              <p>
                Мы работаем в городах Нур-Султан и Кокшетау и занимаемся полным
                сопровождением сделок на рынке недвижимости, как первичной, так
                и вторичной. Наша компания работает на рынке уже больше двух
                лет, наша основа - штат опытных специалистов, которые работают
                на рынке недвижимости не первый год, знают город как свои пять
                пальцев, могут рассказать вам особенности каждого района, плюсы
                и минусы любого ЖК в городах присутствия.
              </p>
            </div>
            <div className="about__text_button">
              <button>
                Подобрать жилье
                <img src={arrowAbout} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="about__image">
            <img src={imageAbout} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
