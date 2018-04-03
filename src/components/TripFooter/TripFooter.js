import React from 'react';
import { connect } from 'react-redux';
import seatIcon from '../../assets/icons/seat-icon.svg';
import trainIcon from '../../assets/icons/train-icon.svg';
import musicIcon from '../../assets/icons/music.svg';

import './TripFooter.css';

const TripFooter = ({ userSelectedSeat, departure }) => {
  const selectedSeat = userSelectedSeat || departure.preSelectedSeat;

  const selectedWagon = (selectedSeat && departure) ? departure.wagons.find((w) => (w.number === selectedSeat.wagonId)) : null;
  return (
    <div className="seat-information-container">
      <div className="seat-information-infobox">
        <div className="seat-information">
          <div className="seat-information-header">
            <img src={trainIcon} alt="seatIcon"></img>
            <h3>Vagn {selectedSeat.wagonId}</h3>
          </div>
          <div className="seat-information-header">
            <img src={seatIcon} alt="seatIcon"></img>
            <h3 className="seat-information">Plats {selectedSeat.seatId}</h3>
          </div>
        </div>

        { selectedWagon && selectedWagon.type === 'bistro' && (<div className="seat-information-text">
          <hr className="seat-information-line-break"></hr>
          <img src={musicIcon} alt="seatIcon"></img>
          <p className="seat-information-text-big">Du sitter i anslutning till bistron</p>
          <p>Platserna närmast bistron passar dig som vill ha en lite mer social miljö, eller bara nära till bistron. Musik kan förekomma vissa tider.</p>
        </div>) }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  userSelectedSeat: state.journey.selectedSeats.find((s) => (s.departureId === ownProps.departureId)),
  departure: state.departures.find((d) => (d.id === ownProps.departureId)),
});

export default connect(mapStateToProps)(TripFooter);
