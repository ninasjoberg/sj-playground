import React from 'react';
import { wagonsSeatmap } from '../../constants/trainInfo';
import seatInactive from '../../assets/seatmap/seat-inactive.svg';
import seatAvailableImg from '../../assets/seatmap/seat-available.svg';


const SeatMapWagon = (wagonInfo, availableSeats) => {
  const wagon = { ...wagonInfo, ...wagonsSeatmap[wagonInfo.type] };

  const cl = wagon.type === 'locomotive' ? `seatmap-wagon ${wagon.type}` : 'seatmap-wagon';
  if (wagon === 'locomotive') {
    return null;
  }

  let totalAbOffset = 0;  // x value for seat absolue position
  let totalCdOffset = 0;
  let currentAbOffset = 0; // about 46px, offeset between seats, higer if there is a table or first class
  let currentCdOffset = 0;
  let seatNumber = 0; // seat ticket number

  const numberOfRows = wagon.numberOfRows;

  let allSeats = [];
  // one row
  for (let rowNumber = 1; rowNumber <= numberOfRows; rowNumber++) {

    const exceptionRow = wagon.exceptionRows.find((exception) => {
      return exception.number === rowNumber;
    });

    // one seat
    const oneRow = wagon.seats.map( (s) => {
      let seat = s;

      if (exceptionRow && exceptionRow[s.side]) {
        const exceptionSeat = exceptionRow[s.side];
        seat = { ...s, ...exceptionSeat };
      }

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
      seatNumber += 1;

      const available = availableSeats.find((availableSeat) => {
        return seatNumber === availableSeat.seat && wagon.number === availableSeat.wagon;
      });

      const left = seat.side === 'ab' ? totalAbOffset : totalCdOffset;
      const top = seat.top;
      const c = seat.backward ? 'seatmap-seat-backwards' : ' ';
      const seatIcon = available ? seatAvailableImg : seatInactive;

      const selected = false; // todo click seat to select

      return (
        <div className="seatmap-seat" style={{ top, left }}>
          <div className="seatmap-seat-inner">
            <img className={c} src={seatIcon} alt="seatIcon" />
            { selected && <span className="seatmap-number">{seatNumber}</span> }
          </div>
        </div>
      );
    });
    allSeats = allSeats.concat(oneRow);
  }


  return (
    <div className={cl} style={{ width: wagon.width }}>
      {allSeats}
      <img className="train-img"src={wagon.interior} alt="seatIcon"></img>
    </div>
  );
};

export default SeatMapWagon;
