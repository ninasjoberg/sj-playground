import React from 'react';
import MenuButton from './MenuButton.js';
import './Header.css';


const Header = () => {
    return (
        <div className="header-container">
            <MenuButton name='MENY'></MenuButton>
            <div>SJ-IKON</div>
            <MenuButton name='LOGGA IN'>LOGGA IN</MenuButton>
        </div>
    );
};

export default Header;