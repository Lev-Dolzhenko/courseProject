import React from "react";
import AbsItem from "../components/AbsItem";
import HeaderNav from "../components/HeaderNav";
import Footer from "../sections/Footer";

const Favourites = () => {
  return (
    <>
      <HeaderNav isWrap={true} />
      <section className="favourites">
        <div className="container">
          <div className="person__wrapper">
            <div className="person__title">
              <h2 className="title2">Личный кабинет</h2>
            </div>
            <div className="person__info">
              <div className="person__info--block">
                <strong>
                  Имя:<span> Лев</span>
                </strong>
              </div>
              <div className="person__info--block">
                <strong>
                  Фамилия:<span> Долженко</span>
                </strong>
              </div>
              <div className="person__info--block">
                <strong>
                  Отчество:<span> Евгеньевич</span>
                </strong>
              </div>
              <div className="person__info--block">
                <strong>
                  Номер телефона:<span> +7 999 999 99 99</span>
                </strong>
              </div>
              <div className="person__info--block">
                <strong>
                  Пароль:<span> 111233</span>
                </strong>
              </div>
              <div className="person__info--block">
                <strong>
                  Электронная почта:<span> work@yandex.ru</span>
                </strong>
              </div>
            </div>
          </div>
          <div className="favourites__title">
            <h2 className="title2">Избранное</h2>
          </div>
          <div className="favourites__list">
            <AbsItem />
            <AbsItem />
            <AbsItem />
            <AbsItem />
            <AbsItem />
            <AbsItem />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Favourites;
