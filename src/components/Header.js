import React from 'react';
import MenuButton from './MenuButton';
import './Header.css';
import logo from '../assets/logo.svg';
import user from '../assets/user.svg';
import menuIcon from '../assets/menu-button.svg';

const Header = () => (
  <div className="header-container">
    <div className="menu-container">
      <MenuButton><img src={menuIcon} alt="Meny" />
        <h3 className="menu-text">Meny</h3>
      </MenuButton>
    </div>
    <div className="logo-container">
      <img src={logo} alt="SJ" />
    </div>
    <div className="profile-container">
      <MenuButton><img src={user} alt="Min profil" /></MenuButton>
    </div>
  </div>
);

export default Header;
