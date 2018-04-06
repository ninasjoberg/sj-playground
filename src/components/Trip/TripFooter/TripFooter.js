import React from 'react';
import { connect } from 'react-redux';
import seatIcon from '../../../assets/icons/seat-icon.svg';
import trainIcon from '../../../assets/icons/train-icon.svg';
import musicIcon from '../../../assets/icons/music.svg';

import './TripFooter.css';

const TripFooter = ({ userSelectedSeat, departure }) => {
  const selectedSeat = userSelectedSeat || departure.preSelectedSeat;

  const selectedWagon = (selectedSeat && departure) ? departure.wagons.find((w) => (w.number === selectedSeat.wagonId)) : null;
  return (
    <div className="trip-footer-container">
      <div className="trip-footer-infobox">
        <div className="trip-footer">
          <div className="trip-footer-header">
            <img src={trainIcon} alt="seatIcon"></img>
            <h3>Vagn {selectedSeat.wagonId}</h3>
          </div>
          <div className="trip-footer-header">
            <img src={seatIcon} alt="seatIcon"></img>
            <h3 className="trip-footer">Plats {selectedSeat.seatId}</h3>
          </div>
        </div>

        { selectedWagon && selectedWagon.type === 'bistro' && (<div className="trip-footer-text">
          <hr className="trip-footer-line-break"></hr>
          <img src={musicIcon} alt="seatIcon"></img>
          <p className="trip-footer-text-big">Du sitter i anslutning till bistron</p>
          <p>Platserna närmast bistron passar dig som vill ha en lite mer social miljö, eller bara nära till bistron. Musik kan förekomma vissa tider.</p>
        </div>) }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  userSelectedSeat: state.journey.userSelectedSeats.find((s) => (s.departureId === ownProps.departureId)),
  departure: state.departures.find((d) => (d.id === ownProps.departureId)),
});

export default connect(mapStateToProps)(TripFooter);
