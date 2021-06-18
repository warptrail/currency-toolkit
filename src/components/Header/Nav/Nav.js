import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList } from './MenuList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import './Nav.css';

export default function Nav(props) {
  const { appMenuClick, handleClick, closeMobileMenu } = props;

  const Menu = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink
          exact
          to={url}
          activeClassName="active"
          onClick={closeMobileMenu}
        >
          {title}
        </NavLink>
      </li>
    );
  });
  return (
    <nav onClick={appMenuClick ? closeMobileMenu : () => {}}>
      <div className="app_menu_dropdown">
        <button onClick={handleClick}>
          <FontAwesomeIcon
            className="pulse"
            icon={faPlay}
            transform={{ rotate: 90 }}
          />
          APP MENU
          <FontAwesomeIcon
            className="pulse"
            icon={faPlay}
            transform={{ rotate: 90 }}
          />
        </button>
      </div>
      <div
        className={appMenuClick ? 'menu_container active' : 'menu_container'}
      >
        <button onClick={handleClick}>Close App Menu</button>
        <ul className="nav_menu">{Menu}</ul>
      </div>
    </nav>
  );
}
