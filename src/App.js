import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Title from './components/Title/Title';
import Trip from './components/Trip/Trip';
import { availableSeats } from './data/tripInfo';
import Footer from './components/Footer/Footer';
import ContinueButton from './components/ContinueButton/ContinueButton';
import ProceedButton from './components/ProceedButton/ProceedButton';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedSeatRouteOne: availableSeats.find((availableSeat) => availableSeat.preSelected),
      selectedSeatRouteTwo: availableSeats.find((availableSeat) => availableSeat.preSelected),
      showProceedButton: false,
      showRoute: 0,
    };
    this.handleSeatClick = this.handleSeatClick.bind(this);
  }

  handleSeatClick = (seat, route) => {
    if (route.routeId === 0) {
      this.setState({
        selectedSeatRouteOne: seat,
        showProceedButton: true,
      });
    }
    this.setState({
      selectedSeatRouteOne: seat,
      showProceedButton: true,
    });
  }

  handleProceedClick = () => {
    this.setState({
      showRoute: 1,
      showProceedButton: false,
    });
  }


  render() {
    const { outwardTrip, returnTrip } = this.props;
    return (
      <div className="App" id="addedExtras">
        <Header />
        <Title />
        <Trip trip={outwardTrip[0]}/>
        { returnTrip && <Trip trip={returnTrip[0]}/> }
        <ContinueButton />
        <ProceedButton handleProceedClick={this.handleProceedClick} />
        <Footer />
        {/*
        <Route section={journey.partOne} />
        {(this.state.showRoute === 0) && <SeatSelector handleSeatClick={this.handleSeatClick} selectedSeat={this.state.selectedSeatRouteOne} route={journey.partOne} /> }
        <SeatInformation selectedSeat={this.state.selectedSeatRouteOne} />

        <Route section={journey.partTwo} />
        {(this.state.showRoute === 1) && <SeatSelector handleSeatClick={this.handleSeatClick} selectedSeat={this.state.selectedSeat} /> }
        <RouteBottom />
        */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  outwardTrip: state.journey.outwardTrip,
  returnTrip: state.journey.returnTrip,
})

export default connect(mapStateToProps)(App);
