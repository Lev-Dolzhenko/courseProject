import React, { useState } from "react";
import HeaderNav from "../components/HeaderNav";
import Footer from "../sections/Footer";

import axios from "axios";

const Authorization = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const setLoginRequest = async () => {
      return axios
        .post(
          "http://176.113.81.99/api/login",
          {
            "email": email,
            "password": pass,
          },
          {
            "Content-Type": "application/json",
          }
        )
        .catch((err) => console.log(err));
    };
    setLoginRequest().catch((err) => console.log(err));
    console.log(email);
    console.log(pass);
  };

  return (
    <>
      <HeaderNav isWrap={true} />
      <div className="account">
        <form onSubmit={(e) => handleLogin(e)} className="account__form">
          <h3 className="account__title">Вход</h3>
          <input
            placeholder="Эл.почта"
            className="account__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Пароль"
            className="account__input"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button type="submit" className="account__button">
            Вход
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Authorization;
