import React from "react";

const DataList = ({ id, price, ppm, rooms, floor, maxFloor, size_m, address }) => {
  return (
    <div className="data-list">
      <div className="data-list_wrapper">
        <div className="data-list_left">
          <div className="data-list_left_wrapper">
            <span className="data-list__price">{price} ₽</span>
            <span className="data-list__price-per">{ppm} ₽/м²</span>
          </div>
          <div className="data-list__street">
            {address}
          </div>
        </div>
        <div className="data-list_right">
          <div className="data-list__rooms data-list__item">
            <span className="data-list__span_muted">Комнат</span>
            <span className="data-list__span_active">{rooms}</span>
          </div>
          <div className="data-list__floors data-list__item">
            <span className="data-list__span_muted">Этаж</span>
            <span className="data-list__span_active">{floor} из {maxFloor}</span>
          </div>
          <div className="data-list__square data-list__item">
            <span className="data-list__span_muted">Площадь</span>
            <span className="data-list__span_active">{size_m} м²</span>
          </div>
        </div>
      </div>
      <div className="data-list_bottom">
        <span>ID: {id}</span>
      </div>
    </div>
  );
};

export default DataList;
