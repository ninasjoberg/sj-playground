import bistroIcon from '../assets/icons/bistro.svg';
import overviewLocomotive from '../assets/overview/loc.png';
import overviewWagon from '../assets/overview/wagon.png';
import overviewEndWagon from '../assets/overview/endwagon.png';
import seatmapLocomotiveImg from '../assets/seatmap/seatmap-locomotive.svg';
import seatmapCartImg from '../assets/seatmap/seatmap-cart.svg';
import seatmapCartBistroImg from '../assets/seatmap/seatmap-cart-bistro.png';


const wagonsOverview = {
  locomotive: { type: 'locomotive', icon: false, selected: false, class: null, overview: overviewLocomotive, overviewWidth: 186 },
  bistro: { type: 'bistro', icon: bistroIcon, selected: false, class: false, overview: overviewWagon },
  standard: { type: 'standard', selected: false, class: false, overview: overviewEndWagon, overviewWidth: 208 },
  tail: { type: 'tail' }, // todo: set correct image and so on
};

const locomotive = {
  width: 1000,
  interior: seatmapLocomotiveImg,
  leftOffset: 0,
  numberOfRows: 0,
};

const standardSeatSpace = (46 + 14);
const standardTableSpace = (100);

const standard = {
  width: 1630,
  interior: seatmapCartImg,
  numberOfRows: 19, // 3 with noseats

  abNumberOfRows: 18,
  cdNumberOfRows: 19,

  seats: [
    { number: 'a', side: 'ab', top: 49 },
    { number: 'b', side: 'ab', top: 7 },
    { number: 'c', side: 'cd', top: 139, backward: true },
    { number: 'd', side: 'cd', top: 183, backward: true },
  ],

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
  width: 1578,
  interior: seatmapCartBistroImg,
  numberOfRows: 12,

  seats: [
    { number: 'a', side: 'ab', top: 49, backward: true },
    { number: 'b', side: 'ab', top: 7, backward: true },
    { number: 'c', side: 'cd', top: 139 },
    { number: 'd', side: 'cd', top: 183 },
  ],

  exceptionRows: [
    { number: 1,
      ab: { offset: 182 },
      cd: { offset: 182, backward: true },
    },
    { number: 2,
      ab: { offset: standardSeatSpace - 2 },
      cd: { offset: standardTableSpace },
    },
    { number: 3,
      cd: { offset: standardSeatSpace },
    },
    { number: 7,
      cd: { noSeat: true },
    },
    { number: 8,
      ab: { offset: standardTableSpace + 4, backward: false },
      cd: { noSeat: true },
    },
    { number: 9,
      ab: { offset: 508 },
      cd: { offset: 500, backward: true },
    },
    { number: 10,
      ab: { offset: standardTableSpace - 8, backward: false },
      cd: { offset: standardTableSpace - 8 },
    },
    { number: 11,
      ab: { offset: standardSeatSpace - 8 },
      cd: { offset: standardSeatSpace - 8, backward: true },
    },
    { number: 12,
      ab: { offset: standardTableSpace - 8, backward: false },
      cd: { offset: standardTableSpace - 8 },
    },
    { number: 13,
      ab: { offset: standardSeatSpace + 50 },
    },
  ],
};


const wagonsSeatmap = {
  standard,
  bistro,
  locomotive,
};


export { wagonsOverview, wagonsSeatmap };
