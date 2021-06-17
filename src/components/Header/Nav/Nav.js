import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList } from './MenuList';

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
    <nav>
      <div className="app_menu_dropdown">
        <button onClick={handleClick}>App Menu</button>
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
