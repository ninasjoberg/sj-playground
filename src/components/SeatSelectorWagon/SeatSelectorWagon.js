import React from 'react';
import './SeatSelectorWagon.css';
import bistroIcon from '../../assets/bistro.svg';
import train from '../../assets/train.png';
import trainTwo from '../../assets/train-2.png';

const wagons = [
  { name: 'Vagn 1', icon: false, selected: false, class: '1 kl' },
  { name: 'Vagn 2', icon: false, selected: false, class: '1 kl' },
  { name: 'Vagn 3', icon: false, selected: false, class: false },
  { name: 'Vagn 4', icon: bistroIcon, selected: false, class: false },
  { name: 'Vagn 5', icon: false, selected: false, class: false },
  { name: 'Vagn 6', icon: false, selected: false, class: false },
];

const Wagon = (wagon) => (
  <div className="wagon">
    <h3 className="wagon-heading">{wagon.name}</h3>
    { wagon.class && <span className="wagon-icon"><h3 className="wagon-class">{wagon.class}</h3></span> }
    { wagon.icon && <span className="wagon-icon"><img src={wagon.icon} alt="seatIcon"></img></span> }
  </div>
  );

const seatSelectorWagon = () => (
  <div className="scroll-container">
    <div className="wagon-container">
      { wagons.map((w) => Wagon(w)) }
    </div>
    <img className="train-png"src={train} alt="seatIcon"></img>
    <img className="train-png train-two"src={trainTwo} alt="seatIcon"></img>
  </div>
);


export default seatSelectorWagon;
