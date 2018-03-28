import React from 'react';
import './SeatSelectorWagon.css';
import bistroIcon from '../../assets/icons/bistro.svg';
import overviewLocomotive from '../../assets/overview/loc.png';
import overviewWagon from '../../assets/overview/wagon.png';
import overviewEndWagon from '../../assets/overview/endwagon.png';
import seatInactive from '../../assets/seatmap/seat-inactive.svg';
import seatAvailableImg from '../../assets/seatmap/seat-available.svg';
import seatmapLocomotiveImg from '../../assets/seatmap/seatmap-locomotive.svg';
import seatmapCartImg from '../../assets/seatmap/seatmap-cart.svg';
import seatmapCartBistroImg from '../../assets/seatmap/seatmap-cart-bistro.svg';

const wagons = [
  { type: 'locomotive', number: null, icon: false, selected: false, class: null, interior: seatmapLocomotiveImg, overview: overviewLocomotive, overviewWidth: '186px', width: '1000px' },
  // { number: 1, icon: false, selected: false, class: '1 kl', interior: seatmapCartImg, overview: overviewWagon },
  // { number: 2, icon: false, selected: false, class: '1 kl', interior: seatmapCartImg, overview: overviewWagon },
  // { number: 3, icon: false, selected: false, class: false, interior: seatmapCartImg, overview: overviewWagon },
  // { number: 4, icon: false, selected: false, class: false, interior: seatmapCartImg, overview: overviewWagon },
  { type: 'bistro', number: 5, icon: bistroIcon, selected: false, class: false, interior: seatmapCartBistroImg, overview: overviewWagon, width: '1578px' },
  { number: 6, icon: false, selected: false, class: false, interior: seatmapCartImg, overview: overviewEndWagon, overviewWidth: '206px', width: '1630px' },
];

const seats = [
  { number: 'a', side: 'ab', top: 49 },
  { number: 'b', side: 'ab', top: 7 },
  { number: 'c', side: 'cd', top: 139, backward: true },
  { number: 'd', side: 'cd', top: 183, backward: true },
];

const availableSeats = [
  { seat: 1, wagon: 5 },
  { seat: 3, wagon: 6 },
  { seat: 10, wagon: 6 },
];

const standardSeatSpace = (46 + 14);
const standardTableSpace = (100);
const standard = {
  numberOfRows: 19, // 3 with noseats

  abNumberOfRows: 18,
  cdNumberOfRows: 19,

  exceptionRows: [
    { number: 1,
      ab: { noSeat: true },
      cd: { offset: 240 },
    },
    { number: 2,
      ab: { offset: 262, backward: true },
      cd: { offset: standardSeatSpace },
    },
    { number: 3,
      ab: { offset: standardTableSpace },
    },
    { number: 4,
      ab: { offset: standardSeatSpace },
    },
    { number: 8,
      ab: { offset: standardSeatSpace + 16 },
      cd: { offset: standardSeatSpace + 16 },
    },
    { number: 9,
      ab: { offset: standardSeatSpace - 2 },
      cd: { offset: standardSeatSpace - 2 },
    },
    { number: 14,
      ab: { offset: standardSeatSpace + 6 },
    },
    { number: 15,
      ab: { offset: standardSeatSpace - 2 },
    },
    { number: 19,
      cd: { offset: standardTableSpace + 8, backward: false },
    },
  ],
};

const bistro = {
  abOffset: 132,
  cdOffset: 132,
  numberOfRows: 14,
  exceptionRows: [],
};

const wagonTypes = {
  standard,
  bistro,
  locomotive: {
    leftOffset: 0,
    numberOfRows: 0,
  },
};

const OverviewWagon = (wagon) => {
  const w = wagon.overviewWidth || '190px';
  return (
    <div className="wagon" style={{ width: w }}>
      <div className="wagon-heading">
        <h3>Vagn {wagon.number}</h3>
        { wagon.class && <span className="wagon-icon"><h3 className="wagon-class">{wagon.class}</h3></span> }
        { wagon.icon && <span className="wagon-icon"><img src={wagon.icon} alt="seatIcon"></img></span> }
      </div>
      <img className="overview-wagon-image" src={wagon.overview} alt="train" />
    </div>
  );
};

const SeatMapWagon = (wagon) => {
  const wagonType = wagon.type ? wagonTypes[wagon.type] : wagonTypes.standard;

  const cl = wagon.type === 'locomotive' ? `seatmap-wagon ${wagon.type}` : 'seatmap-wagon';
  const w = wagon.width || '1366px';

  let totalAbOffset = 0;  // x value for seat absolue position
  let totalCdOffset = 0;
  let currentAbOffset = 0; // about 46px, offeset between seats, higer if there is a table or first class
  let currentCdOffset = 0;
  let seatNumber = 0; // seat ticket number

  const numberOfRows = wagonType.numberOfRows;

  let allSeats = [];
  // one row
  for (let rowNumber = 1; rowNumber <= numberOfRows; rowNumber++) {



    const exceptionRow = wagonType.exceptionRows.find((exception) => {
      return exception.number === rowNumber;
    });

    // one seat
    const oneRow = seats.map((s) => {
      let seat = s;

      if (exceptionRow && exceptionRow[s.side]) {
        const exceptionSeat = exceptionRow[s.side];
        seat = { ...s, ...exceptionSeat };
        console.log(seat)
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
        console.log("NO SEAT!")
        return null;
      }
      seatNumber += 1;

      const available = availableSeats.find((availableSeat) => {
        return seatNumber === availableSeat.seat && wagon.number === availableSeat.wagon;
      });

      const l = seat.side === 'ab' ? `${totalAbOffset}px` : `${totalCdOffset}px`;


      const t = `${seat.top}px`;
      const c = seat.backward ? 'seatmap-seat-backwards' : ' ';
      const seatIcon = available ? seatAvailableImg : seatInactive;
      const n = available ? seatNumber : seatNumber; //ta bort sen

      return (
        <div className="seatmap-seat" style={{ top: t, left: l }}>
          <div className="seatmap-seat-inner">
            <img className={c} src={seatIcon} alt="seatIcon" />
            <span className="seatmap-number">{n}</span>
          </div>
        </div>
      );
    });
    allSeats = allSeats.concat(oneRow);
  }


  return (
    <div className={cl} style={{ width: w }}>
      {allSeats}
      <img className="train-img"src={wagon.interior} alt="seatIcon"></img>
    </div>
  );
};


class seatSelectorWagon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const seatMapScroll = document.querySelector('.seatmap-scroll');
    const overviewScroll = document.querySelector('.overview-scroll');
    // add rezise listener
    const overviewWidth = document.querySelector('.overview-container').getBoundingClientRect().width;
    const seatMapWidth = document.querySelector('.seatmap-container').getBoundingClientRect().width;
    const screenWidth = seatMapScroll.getBoundingClientRect().width;
    const targets = {
      leaderWidth: seatMapWidth,
      leaderScroll: seatMapScroll,
      followerWidth: overviewWidth,
      followerScroll: overviewScroll,
      screenWidth,
    };
    seatMapScroll.addEventListener('scroll', (e) => this.handleScroll(e, targets));
  }

  handleScroll = (event, targets) => {
    const scrollPercent = targets.leaderScroll.scrollLeft / (targets.leaderWidth - targets.screenWidth);
    const scrollTarget = scrollPercent * (targets.followerWidth - targets.screenWidth);
    targets.followerScroll.scrollTo(scrollTarget, 0);
  }

  render() {
    return (
      <div>
        <div className="overview-scroll">
          <div className="overview-container">
            { wagons.map((w) => OverviewWagon(w)) }
          </div>
        </div>
        <div className="seatmap-scroll">
          <div className="seatmap-container">
            { wagons.map((w) => SeatMapWagon(w)) }
          </div>
        </div>
      </div>
    );
  }
}
export default seatSelectorWagon;
