import React from 'react';
import seatIconBlue from '../../assets/seatIconBlue.svg';
import arrowIconRight from '../../assets/arrow-r.svg';
import SeatSelectorWagon from '../SeatSelectorWagon/SeatSelectorWagon';
import './SeatSelector.css';

const SeatSelector = () => (
  <div className="seat-selector-container">
    <div className="seat-selector-menu">
      <a href="" className="seat-icon-div">
        <img className="seat-icon"src={seatIconBlue} alt="seatIcon"></img>
        <p className="seat-selector-menu-text">Platsönskemål</p>
      </a>
      <div className="arrow-icon-div">
        <p className="seat-selector-menu-text">Färdriktning</p>
        <img className="arrow-icon"src={arrowIconRight} alt="seatIcon"></img>
      </div>
    </div>
    <SeatSelectorWagon />
  </div>
);

export default SeatSelector;
