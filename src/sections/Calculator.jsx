import React, { useState } from "react";

const Calculator = () => {
  const [activeButton, setActiveButton] = useState("annuity");

  const [res, setRes] = useState({
    loanAmount: 0,
    loanTerm: 0,
    monthlyPayment: 0,
    totalLoanCost: 0,
    interestPaid: 0,
  });

  const [costInput, setCostInput] = useState("");
  const [initPaymentInput, setInitPaymentInput] = useState("");
  const [mortgageInput, setMortgageInput] = useState("");
  const [termMortgageInput, setTermMortgageInput] = useState("");

  const chooseType = (
    type,
    loanAmount,
    downPaymentPercentage,
    interestRate,
    loanTermInYears
  ) => {
    if (type === "annuity") {
      // Преобразуем процентные значения в десятичные дроби
      const downPayment = loanAmount * (downPaymentPercentage / 100);
      const interestRateDecimal = interestRate / 100;
      const loanTermInMonths = loanTermInYears * 12;

      // Рассчитываем ежемесячный платеж по формуле аннуитетного кредита
      const monthlyPayment =
        (loanAmount - downPayment) *
        (interestRateDecimal /
          12 /
          (1 - Math.pow(1 + interestRateDecimal / 12, -loanTermInMonths)));

      // Рассчитываем другие значения
      const loanAmountWithoutDownPayment = loanAmount - downPayment;
      const totalLoanCost = monthlyPayment * loanTermInMonths;
      const interestPaid = totalLoanCost - loanAmountWithoutDownPayment;

      setActiveButton("annuity")

      // Округляем значения
      setRes({
        loanAmount: loanAmountWithoutDownPayment,
        loanTerm: loanTermInYears,
        monthlyPayment: monthlyPayment.toFixed(2),
        totalLoanCost: totalLoanCost.toFixed(2),
        interestPaid: interestPaid.toFixed(2),
      });


      // Возвращаем результат
      return setRes;
    } else {
      // Преобразуем процентные значения в десятичные дроби
      const downPayment = loanAmount * (downPaymentPercentage / 100);
      const interestRateDecimal = interestRate / 100;
      const loanTermInMonths = loanTermInYears * 12;

      // Рассчитываем ежемесячный платеж по формуле дифференцированного кредита
      const monthlyPayment =
        (loanAmount - downPayment) / loanTermInMonths +
        (interestRateDecimal * (loanAmount - downPayment)) / 12;

      // Рассчитываем другие значения
      const loanAmountWithoutDownPayment = loanAmount - downPayment;
      const totalLoanCost = monthlyPayment * loanTermInMonths;
      const interestPaid = totalLoanCost - loanAmountWithoutDownPayment;

      // Округляем значения
      setRes({
        loanAmount: loanAmountWithoutDownPayment,
        loanTerm: loanTermInYears,
        monthlyPayment: monthlyPayment.toFixed(2),
        totalLoanCost: totalLoanCost.toFixed(2),
        interestPaid: interestPaid.toFixed(2),
      });

      setActiveButton("differentiated")

      // Возвращаем результат
      return setRes;
    }
  };

  const handleButtonClick = (e) => {
    setActiveButton(e.target.id);
  };

  return (
    <section className="calculator">
      <div className="container">
        <div className="calculator__row">
          <div className="calculator__row_item">
            <span>Стоимость объекта</span>
            <input
              onChange={(e) => setCostInput(e.target.value)}
              type="text"
              placeholder="0"
            />
          </div>
          <div className="calculator__row_item">
            <span>Первоначальный взнос, %</span>
            <input
              onChange={(e) => setInitPaymentInput(e.target.value)}
              type="text"
              placeholder="0.0"
            />
          </div>
          <div className="calculator__row_item">
            <span>Ставка ипотеки, % </span>
            <input
              onChange={(e) => setMortgageInput(e.target.value)}
              type="text"
              placeholder="0"
            />
          </div>
          <div className="calculator__row_item">
            <span>Срок ипотеки, лет</span>
            <input
              onChange={(e) => setTermMortgageInput(e.target.value)}
              type="text"
              placeholder="0"
            />
          </div>
          <div className="calculator__row_item calculator__row_item-button">
            <button
              onClick={(e) => {
                setActiveButton(e.target.id);
                chooseType(
                  activeButton,
                  costInput,
                  initPaymentInput,
                  mortgageInput,
                  termMortgageInput
                );
              }}
            >
              Подобрать
            </button>
          </div>
        </div>
        <div className="calculator__toggler">
          <button
            id="annuity"
            className={`calculator__toggler_button ${
              activeButton === "annuity"
                ? "calculator__toggler_button-active"
                : ""
            }`}
            onClick={handleButtonClick}
          >
            Аннуитетный
          </button>
          <button
            id="differentiated"
            className={`calculator__toggler_button ${
              activeButton === "differentiated"
                ? "calculator__toggler_button-active"
                : ""
            }`}
            onClick={handleButtonClick}
          >
            Дифференцированный
          </button>
        </div>
        <div className="calculator__info">
          <span className="calculator__info_title">
            Результат расчета кредита
          </span>
          <ul className="calculator__info_list">
            <li className="calculator__info_item">
              <span className="calculator__info_title">Сумма кредита</span>
              <span className="calculator__info_price">
                {res.loanAmount}
                руб
              </span>
            </li>
            <li className="calculator__info_item">
              <span className="calculator__info_title">Срок кредита</span>
              <span className="calculator__info_price">{res.loanTerm} лет</span>
            </li>
            <li className="calculator__info_item">
              <span className="calculator__info_title">Ежемесячный платеж</span>
              <span className="calculator__info_price">
                {res.monthlyPayment} руб
              </span>
            </li>
            <li className="calculator__info_item">
              <span className="calculator__info_title">Полные затраты</span>
              <span className="calculator__info_price">
                {res.totalLoanCost} руб
              </span>
            </li>
            <li className="calculator__info_item">
              <span className="calculator__info_title">
                Перепалата за кредит
              </span>
              <span className="calculator__info_price">
                {res.interestPaid} руб
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
