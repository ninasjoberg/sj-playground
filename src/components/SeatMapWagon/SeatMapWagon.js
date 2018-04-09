import React from 'react';
import { connect } from 'react-redux';
import { wagonsSeatmap } from '../../constants/trainInfo';
import seatInactive from '../../assets/seatmap/seat-inactive.svg';
import seatAvailableImg from '../../assets/seatmap/seat-available.svg';
import selectedSeatImg from '../../assets/seatmap/seat-selected.svg';
import './SeatMapWagon.css';
import { changeSeat } from '../../actions';

const SeatMapWagon = ({ wagonInfo, availableSeats, index, userSelectedSeat, handleSeatClick, departure }) => {
  const selectedSeat = userSelectedSeat || departure.preSelectedSeat;

  const wagon = { ...wagonInfo, ...wagonsSeatmap[wagonInfo.type] };

  const allIcons = wagon.icons ? wagon.icons.map((icon, i) => (
    <img src={icon.src} style={{ top: icon.top ? icon.top : 115, left: icon.left }} alt="icon" className="seatmap-icon" key={`icon${i}`} />
  )) : '';

  const cl = wagon.type === 'locomotive' ? `seatmap-wagon ${wagon.type}` : 'seatmap-wagon';
  if (wagon === 'locomotive') {
    return null;
  }

  let totalAbOffset = 0;  // x value for seat absolue position
  let totalCdOffset = 0;
  let currentAbOffset = 0; // about 46px, offeset between seats, higer if there is a table or first class
  let currentCdOffset = 0;
  let seatNumberIterator = 0; // seat ticket number


  const rowsArray = new Array(wagon.numberOfRows).fill({});

  const allSeats = rowsArray.map((rowNumber, i) => {
    const exceptionRow = wagon.exceptionRows.find((exception) => (
      exception.number === (i + 1)
    ));

    // one seat
    return wagon.seats.map((s) => {
      const seat = (exceptionRow && exceptionRow[s.side]) ? { ...s, ...exceptionRow[s.side] } : s;

      if (seat.number === 'a') {
        if (seat.offset) {
          currentAbOffset = seat.offset;
        }
        totalAbOffset += currentAbOffset;
      } else if (seat.number === 'c') {
        if (seat.offset) {
          currentCdOffset = seat.offset;
        }
        totalCdOffset += currentCdOffset;
      }

      if (seat.noSeat) {
        return null;
      }

      seatNumberIterator += 1;
      const seatNumber = seatNumberIterator;

      const seatIdentifier = {
        seatId: seatNumber,
        wagonId: wagon.number,
        departureId: departure.id,
      };

      const available = availableSeats.find((availableSeat) => (
        seatNumber === availableSeat.seat && wagon.number === availableSeat.wagon
      ));

      const left = seat.side === 'ab' ? totalAbOffset : totalCdOffset;
      const top = seat.top;
      const c = seat.backward ? 'seatmap-seat-backwards' : ' ';

      let selected = false;
      if ((selectedSeat.wagonId === wagon.number) && (selectedSeat.seatId === seatNumber)) {
        selected = true;
      }

      let seatIcon = available ? seatAvailableImg : seatInactive;
      seatIcon = selected ? selectedSeatImg : seatIcon;

      const onClick = available ? () => handleSeatClick(seatIdentifier) : () => {};

      return (
        <div className="seatmap-seat" key={`${wagon.number}_${seatNumber}`} data-seat-id={seatNumber} data-wagon-id={wagon.number} style={{ top, left }} onClick={onClick} role="button">
          <div className="seatmap-seat-inner">
            <img className={c} src={seatIcon} alt="seatIcon" style={ available && {cursor: 'pointer'}} />
            { selected && <span className="seatmap-number">{seatNumber}</span> }
          </div>
        </div>
      );
    });
  });


  return (
    <div className={cl} key={index} style={{ width: wagon.width }} data-seatmap-id={wagon.id} >
      {allSeats}
      {allIcons}
      <img className="train-img"src={wagon.interior} alt="seatIcon"></img>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  userSelectedSeat: state.journey.userSelectedSeats.find((s) => (s.departureId === ownProps.departureId)),
  departure: state.departures.find((d) => (d.id === ownProps.departureId)),
});

const mapDispatchToProps = (dispatch) => ({
  handleSeatClick: (selectedSeat) => { dispatch(changeSeat(selectedSeat)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SeatMapWagon);
