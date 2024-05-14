import React from "react";

const DataList = ({ price, pricePerM, floor, rooms, square, street, id }) => {
  return (
    <div className="data-list">
      <div className="data-list_wrapper">
        <div className="data-list_left">
          <div className="data-list_left_wrapper">
            <span className="data-list__price">36 400 000 ₸</span>
            <span className="data-list__price-per">766 000 ₸/м²</span>
          </div>
          <div className="data-list__street">
            ЖК “Atlanta”, г. Нур-Султан, Есильский район, ул. Ш. Калдаякова ,
            4/2
          </div>
        </div>
        <div className="data-list_right">
          <div className="data-list__rooms data-list__item">
            <span className="data-list__span_muted">Комнат</span>
            <span className="data-list__span_active">2</span>
          </div>
          <div className="data-list__floors data-list__item">
            <span className="data-list__span_muted">Этаж</span>
            <span className="data-list__span_active">6 из 8</span>
          </div>
          <div className="data-list__square data-list__item">
            <span className="data-list__span_muted">Площадь</span>
            <span className="data-list__span_active">48.2 м²</span>
          </div>
        </div>
      </div>
      <div className="data-list_bottom">
        <span>ID: 7354758</span>
      </div>
    </div>
  );
};

export default DataList;
