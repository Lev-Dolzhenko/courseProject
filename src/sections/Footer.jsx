import React from "react";

//images
import logotype from "../images/logotypeFooter.svg";
import instIcon from "../images/inst.svg";
import ballIcon from "../images/ball.svg";
import twitterIcon from "../images/twitter.svg";
import youtubeIcon from "../images/youtube.svg";
import emailIcon from "../images/emailIcon.svg";
import phoneIcon from "../images/phoneIcon.svg";
import mapIcon from "../images/mapIcon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__row_info">
            <img src={logotype} alt="logotype" />
            <p>
              Найдите свою идеальную квартиру в наших современных жилых
              комплексах.
            </p>
            <ul className="footer__socials">
              <li className="footer__social">
                <a href="#!">
                  <img src={instIcon} alt="inst" />
                </a>
              </li>
              <li className="footer__social">
                <a href="#!">
                  <img src={ballIcon} alt="ball" />
                </a>
              </li>
              <li className="footer__social">
                <a href="#!">
                  <img src={twitterIcon} alt="twitter" />
                </a>
              </li>
              <li className="footer__social">
                <a href="#!">
                  <img src={youtubeIcon} alt="youtube" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__row_links">
            <ul className="footer__links_list">
              <li className="footer__links_item footer__links_item-title">
                Быстрые ссылки
              </li>
              <li className="footer__links_item footer__links_item-link">
                <a href="#!">Главная</a>
              </li>
              <li className="footer__links_item footer__links_item-link">
                <a href="#!">Квартиры</a>
              </li>
              <li className="footer__links_item footer__links_item-link">
                <a href="#!">О компании</a>
              </li>
            </ul>
          </div>
          <div className="footer__row_contacts">
            <ul className="footer__contacts_list">
              <li className="footer__contacts_item footer__contacts_item-title">
                Контакты
              </li>
              <li className="footer__contacts_item footer__contacts_item-link">
                <img src={emailIcon} alt="emailIcon" />
                <span>hello@landify.co</span>
              </li>
              <li className="footer__contacts_item footer__contacts_item-link">
                <img src={phoneIcon} alt="phoneIcon" />
                <span>+91 98765 43210</span>
              </li>
              <li className="footer__contacts_item footer__contacts_item-link">
                <img src={mapIcon} alt="mapIcon" />
                <span>772 Lyonwood Ave Walnut, CA 91789</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__wrapper">
          <div className="footer__wrapper_copyright">
            <div className="copyright">
              <p>
                ©<span>2022</span> КУПИДОМ. All rights reserved
              </p>
            </div>
          </div>
          <ul className="footer__wrapper_list">
            <li className="footer__wrapper_item">
              <a href="#!">Terms & Conditions</a>
            </li>
            <li className="footer__wrapper_item">
              <a href="#!">Privacy Policy</a>
            </li>
            <li className="footer__wrapper_item">
              <a href="#!">Sitemap</a>
            </li>
            <li className="footer__wrapper_item">
              <a href="#!">Disclaimer</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
