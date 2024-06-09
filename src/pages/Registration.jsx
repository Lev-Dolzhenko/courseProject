import React from "react";
import HeaderNav from "../components/HeaderNav";
import Footer from "../sections/Footer";

const Registration = () => {

  // useEffect(() => {
  //   const getCurrentFlat = async (id) => {
  //     return axios
  //       .post("http://176.113.81.99/api/login", {""})
  //       .then((resp) => resp.data)
  //       .catch((err) => console.log(err));
  //   };

  //   const url = window.location.href;
  //   const flatID = url.split("/").pop();
  //   getCurrentFlat(flatID)
  //     .then((resp) => {
  //       setCurrentFlat(resp);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <HeaderNav isWrap={true} />
      <div className="account">
        <form className="account__form">
          <h3 className="account__title">Регистрация</h3>
          <input placeholder="Имя" className="account__input" type="text" />
          <input placeholder="Фамилия" className="account__input" type="text" />
          <input
            placeholder="Отчество"
            className="account__input"
            type="text"
          />
          <input
            placeholder="Эл. почта"
            className="account__input"
            type="email"
          />
          <input
            placeholder="Номер телефона"
            className="account__input"
            type="tel"
          />
          <input
            placeholder="Дата рождения"
            className="account__input"
            type="date"
          />
          <input
            placeholder="Пароль"
            className="account__input"
            type="password"
          />
          <input
            placeholder="Пароль"
            className="account__input"
            type="password"
          />
          <button className="account__button">Регистрация</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
