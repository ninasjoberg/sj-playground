import React from 'react';
import { connect } from 'react-redux';
import './Trip.css';
import TripHeader from './TripHeader/TripHeader';
import SeatSelector from '../SeatSelector/SeatSelector';
import TripFooter from './TripFooter/TripFooter';
import { toggleShowSeatMap } from '../../actions';

class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.trip = null;
    this.tripRef = (element) => {
      this.trip = element;
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.showDepartureId !== prevProps.showDepartureId) {
      if (this.props.trip.departureId === 1 && this.props.showDepartureId === 1) {
        const returnTrip = this.trip.offsetTop;
        window.scroll({
          top: returnTrip,
          left: 0,
          behavior: 'smooth',
        });
      }
    }
  }

  render() {
    const { from, to, departureId } = this.props.trip;
    const { showDepartureId } = this.props;

    return (
      <div className="trip" ref={this.tripRef} id={`trip${departureId}`}>
        <TripHeader from={from} to={to} onClick={() => this.props.toggleSeatMap(departureId)} />
        {(departureId === showDepartureId) && <SeatSelector departureId={departureId} />}
        <TripFooter departureId={departureId} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showDepartureId: state.journey.showDepartureId,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSeatMap: (departureId) => { dispatch((toggleShowSeatMap(departureId))); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
