import React from 'react';
import './Trip.css';
import TripHeader from './TripHeader/TripHeader';
import SeatSelector from '../SeatSelector/SeatSelector';
import TripFooter from '../TripFooter/TripFooter';

const Trip = (props) => {
  const { from, to, departureId } = props.trip;

  return (
    <div className="trip">
      <TripHeader from={from} to={to} />
      {/* <SeatSelector departureId={departureId} /> */}
      <TripFooter departureId={departureId} />
    </div>
  )
};

export default Trip;
