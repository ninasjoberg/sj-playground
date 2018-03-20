import React from 'react';
import MenuButton from './MenuButton';
import './Header.css';
import logo from '../assets/logo.svg';


const Header = () => (
  <div className="header-container">
    <MenuButton name="MENY"></MenuButton>
    <img src={logo} alt="SJ" />
    <MenuButton name="LOGGA IN">LOGGA IN</MenuButton>
  </div>
    );

export default Header;
