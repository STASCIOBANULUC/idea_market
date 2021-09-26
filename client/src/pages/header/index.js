import React, { useEffect } from 'react';
import classNames from 'classnames';
import Menu from '../../components/menu';
import { Link } from 'react-router-dom';
import HeaderMenuPopup from './headerMenuPopup';
import LogoCompany from './logoCompany';

const menuItems = [
  {
    id: 0,
    value: 'Создать ПРОЕКТ',
    link: 'about',
  },
  {
    id: 1,
    value: 'Как это работает',
    link: '',
    isDropdown: false,
  },
  {
    id: 2,
    value: 'Контакты',
    link: 'contacts',
  }
];

export default function Header({ services }) {
  const [activeId, setActiveId] = React.useState(null);
  const [activePopup, setActivePopup] = React.useState(false);

  function isActivePopup(){
    setActivePopup(!activePopup);
  }

  function addedOverflowForBody(){
    !activePopup ? document.body.classList.add('overflow'):(document.body.classList.remove('overflow'));
    !activePopup ? document.documentElement.classList.add('overflow-x'):(document.documentElement.classList.remove('overflow-x'));
  }

  return (
    <>
    <header className={classNames("header")}>
      <div className="container-big container-big--header">
        <div className={classNames("header__inner", activePopup && 'active')}>
          <div className={"header__box"}>
            <LogoCompany logo={'/logo.svg'} setActiveId={setActiveId} />
            <button className={classNames("header__popup", activePopup && 'active')} onClick={(e)=>{isActivePopup();addedOverflowForBody();}}><span className="header__popup-line"></span>Меню</button>
            
            {!activePopup && 
              <Menu 
                activePopup={activePopup} 
                menuItems={menuItems} 
                activeId={activeId} 
                setActiveId={setActiveId} 
                services={services}
              />
            
            }
          </div>

            <Link class="menu__link-btn link" to="/login">
              <span class="link__text">Войти</span>
            </Link>
        
        </div>
      </div>
    </header>
      <HeaderMenuPopup 
                activePopup={activePopup} 
                isActivePopup={isActivePopup}
                menuItems={menuItems} 
                activeId={activeId} 
                setActiveId={setActiveId} 
                services={services}
      />
              </>
  );
}
