import React from 'react';
import seatIcon from '../../assets/seatIcon.svg';
import './SeatSelector.css';

const SeatSelector = () => (
  <div className="seat-selector-container">
    <div className="seat-selector-menu">
      <div className="seat-icon-div">
        <img className="seat-icon"src={seatIcon} alt="seatIcon"></img>
        <p className="seat-selector-menu-text">Platsönskemål</p>
      </div>
      <div className="arrow-icon-div">
        <p className="seat-selector-menu-text">Färdriktning</p>
        <img className="arrow-icon"src={seatIcon} alt="seatIcon"></img>
      </div>
    </div>
  </div>
);

export default SeatSelector;
