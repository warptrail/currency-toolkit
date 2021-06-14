import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList } from './MenuList';

import './Nav.css';

export default function Nav() {
  const Menu = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });
  return (
    <nav>
      <ul>{Menu}</ul>
    </nav>
  );
}
