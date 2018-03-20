import React from 'react';
import MenuButton from './MenuButton';
import './Header.css';
import logo from '../assets/logo.svg';
import user from '../assets/user.svg';
import menuIcon from '../assets/menu-button.svg';


const Header = () => (
  <div className="header-container">
    <MenuButton><img src={menuIcon} alt="Meny" /></MenuButton>
    <img src={logo} alt="SJ" />
    <MenuButton><img src={user} alt="Min profil" /></MenuButton>
  </div>
    );

export default Header;
