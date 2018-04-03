import React from 'react';
import './Footer.css';
import logoWhite from '../../assets/logo-white.svg';

const Footer = () => {
  return (
    <div className="footer-background">
      <button className="footer-cancel-button">Avbryt bokning</button>
      <hr className="footer-line-break" />
      <img className="footer-logo" src={logoWhite} alt="logo" />
      <div className="footer-text">
        <span>© 2016 SJ AB</span>
        <span>0771 - 75 75 75</span>
        <span>Om webbplatsen</span>
      </div>
    </div>
  );
};

export default Footer;
