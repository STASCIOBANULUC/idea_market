import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default function Footer({ services }) {
  return (
    <header className={classNames('footer')}>
      <div className="footer__top">
        <div className="container-big">
          <div className="footer__inner">
            <div className="footer__item">
              <div className="footer__headline">Критерии включения</div>
              <ul>
                {services &&
                  services.map((service) => (
                    <li key={service._id}>
                      <Link href={`/services/${service._id}`}>
                        <a>{service.serviceName}</a>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="footer__item">
              <div className="footer__headline">Пациентам</div>

              <ul>
                {/* <li>Что такое клинические исследования</li>
                <li>Мифы о клинических исследованиях</li> */}
                <li>
                  <Link href='/faq'>Вопрос & Ответ</Link>
                </li>
                <li>
                  <Link href='/technologies'>Наши технологии</Link>
                </li>
                <li>
                  <Link href='/chemotherapy'>Химиотерапия</Link> 
                </li>
                <li>
                  <Link href='/about'>О Центре</Link>
                </li>
                <li>
                  <Link href='/surgery'>Хирургическое лечение</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container-big">
          <div className="footer__bottom-inner">
            <div className="footer__bottom-meta">
              <a className="footer__cicr" href="/">
                <img src="/logo-full.svg" alt="company full logo" />

                <span className="footer__desc-cicr">
                  <span>Центр международных</span>
                  <span>клинических исследований</span>
                </span>
              </a>

              <ul className="footer__social">
                <li className="footer__social-list">
                  <a href="#">
                    <div className="icon-facebook"></div>
                    <span>facebook</span>
                  </a>
                </li>

                <li className="footer__social-list">
                  <a href="#">
                    <div className="icon-instagram"></div>
                    <span>instagram</span>
                  </a>
                </li>
              </ul>

              <a className="aimix" href="/">
                <span className="footer__desc-aimix">
                  <span>
                    <b>Разработка web-сайта</b>
                  </span>
                  <span>поддержка и продвижение</span>
                </span>

                <img src="/aimix.svg" alt="company full logo" />
              </a>
            </div>

            <div className="footer__copy">
              <p>©2021 Все права защищены</p>

              <div className="footer__copy-inner">
                <a href="/">Политика конфиденциальности</a>

                <a href="/">Пользовательское соглащение</a>
              </div>
            </div>

            <a className="aimix-mobile" href="/">
              <span className="footer__desc-aimix">
                <span>
                  <b>Разработка web-сайта</b>
                </span>
                <span>поддержка и продвижение</span>
              </span>

              <img src="/aimix.svg" alt="company full logo" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
