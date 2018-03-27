import React from 'react';
import './MenuButton.css';

const MenuButton = (props) => (
  <button className="menu-button">
    {props.children}
  </button>
);

export default MenuButton;
