import React from 'react';
import './MenuButton.css';

const MenuButton = (props) => {
    return (
        <button className='menu-button'>
            {props.name}
        </button>
    );
};

export default MenuButton;