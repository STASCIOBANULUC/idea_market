import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
  
const Menu = ({multiSelect = false, menuItems, activeId, setActiveId, activePopup, services, isActivePopup }) => {
  const [selection, setSelection] = React.useState([]);
  const [activeMenuMobile, setActiveMenuMobile] = React.useState(false);
  
  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter((current) => current.id !== item.id);
      setSelection([...selectionAfterRemoval]);
    }
  }

  function clickItem(val) {
    setActiveId(val);
  }

  function addedAccentClass(isDropdown){
    if(isDropdown){
      setActiveMenuMobile(!activeMenuMobile)
    }
  }

  function closePopupMobileMenu() {
    if (activePopup) {
      isActivePopup();
      document.body.classList.remove('overflow')
      document.documentElement.classList.remove('overflow-x')
    }
  }

  return (
    <nav className={classNames("menu", activePopup && 'active')}>
      {menuItems && menuItems.map((item, index) => (
        item.isDropdown ? (<li
            className={classNames("menu__item", item.id === activeId ? "active" : '', activeMenuMobile && 'accent')}
            key={item.id}>

            <div
              type="link"
              className="dd-list-link"
              onClick={(e) => {
                handleOnClick(item);
                clickItem(index);
                addedAccentClass(item.isDropdown);
              }}>

              <span className={"menu__left"}>{item.value}
                <span className={"menu__svg"}>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.84844 0.515625H1.15156C0.920703 0.515625 0.791797 0.759375 0.934766 0.925781L4.7832 5.38828C4.89336 5.51602 5.10547 5.51602 5.2168 5.38828L9.06523 0.925781C9.2082 0.759375 9.0793 0.515625 8.84844 0.515625Z" fill="#342314"/>
                  </svg>
                </span>
              
                  <ul className="menu__sublist">
                    {services && services.map(service => (
                      <li className="menu__subitem" key={service._id}>
                        <Link href={`/services/${service._id}`}>
                          <a className="menu__subitem-a">{service.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
              </span>
            </div>

            <span className={"accent"}></span>
            <span className={"accent-active"}></span>

            <ul className={classNames("menu__sublist-mobile", activeMenuMobile && 'active')}>
                    {services && services.map(service => (
                      <li className="menu__subitem" key={service._id} onClick={() => closePopupMobileMenu()}>
                        <Link href={`/services/${service._id}`}>
                          <a className="menu__subitem-a">{service.name}</a>
                        </Link>
                      </li>
                    ))}
            </ul>
              
          </li>):(<Link key={item.id} href={`/${item.link}`}>
          <li
            className={classNames("menu__item", item.id === activeId ? "active" : '')}
            key={item.id}>
            <div
              type="link"
              className="dd-list-link"
              onClick={(e) => {
                handleOnClick(item);
                clickItem(index);
                closePopupMobileMenu();
              }}>
              <span className={"menu__left"}>{item.value}</span>
            </div>

            <span className={"accent"}></span>
            <span className={"accent-active"}></span>
          </li>
        </Link>)
      ))}
    </nav>
  );
};

export default Menu;
