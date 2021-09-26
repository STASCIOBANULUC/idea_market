import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';

export default function LogoCompany(props) {
  return (
    <>
      <Link to="/">
        <a>
          <div className={"logo"} onClick={props.setActiveId}>
            IDEA_M
            {/* <img className={"header__img"} src={logo} alt="logo company" /> */}
          </div>
        </a>
      </Link>
    </>
  );
}
