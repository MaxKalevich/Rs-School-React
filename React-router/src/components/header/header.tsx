import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header: React.FC = (): JSX.Element => (
  <header className="header">
    <ul className="item-wrapper">
      <li className="item">
        <NavLink className="header-link" activeClassName="active" exact to="/">
          Home
        </NavLink>
      </li>
      <li className="item">
        <NavLink className="header-link" activeClassName="active" exact to="/about">
          About
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
