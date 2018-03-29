import React from 'react';
import seatIcon from '../../assets/icons/seat-icon.svg';
import trainIcon from '../../assets/icons/train-icon.svg';
import musicIcon from '../../assets/icons/music.svg';

import './SeatInformation.css';

const SeatInformation = ({ selectedSeat }) => (
  <div className="seat-information-container">
    <div className="seat-information-infobox">
      <div className="seat-information">
        <div className="seat-information-header">
          <img src={trainIcon} alt="seatIcon"></img>
          <h3>Vagn {selectedSeat.wagon}</h3>
        </div>
        <div className="seat-information-header">
          <img src={seatIcon} alt="seatIcon"></img>
          <h3 className="seat-information">Plats {selectedSeat.seat}</h3>
        </div>
      </div>

      { selectedSeat.type === 'bistro' && (<div className="seat-information-text">
        <hr className="seat-information-line-break"></hr>
        <img src={musicIcon} alt="seatIcon"></img>
        <p className="seat-information-text-big">Du sitter i anslutning till bistron</p>
        <p>Platserna närmast bistron passar dig som vill ha en lite mer social miljö, eller bara nära till bistron. Musik kan förekomma vissa tider.</p>
      </div>) }
    </div>
  </div>
);

export default SeatInformation;
