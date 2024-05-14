import React from "react";

//images
import callBg from "../images/callBg.jpeg";

const Call = () => {
  return (
    <section className="call">
      <div className="container">
        <div className="call__wrapper">
          <div className="call__title">
            <h3 className="title3 title3_call">Заказать обратный звонок</h3>
          </div>
          <div className="call__subtitle">
            <p>Если у Вас возникли проблемы или вопросы мы с Вами свяжемся</p>
          </div>
          <form className="call__form">
            <input placeholder="Ваше имя" type="text" />
            <input placeholder="Номер телефона" type="text" />
            <button>Проконсультироваться</button>
          </form>
          <img className="call__wrapper_bg" src={callBg} alt="callBg" />
        </div>
      </div>
    </section>
  );
};

export default Call;
