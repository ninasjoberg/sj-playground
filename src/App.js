import React from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title/Title';
import Route from './components/Route/Route';
import RouteBottom from './components/RouteBottom/RouteBottom';
import SeatSelector from './components/SeatSelector/SeatSelector';
import SeatInformation from './components/SeatInformation/SeatInformation';
import { availableSeats } from './data/tripInfo';
import Footer from './components/Footer/Footer';
import ContinueButton from './components/ContinueButton/ContinueButton';
import ProceedButton from './components/ProceedButton/ProceedButton';

const journey = {
  partOne: {
    from: 'Stockholm C',
    to: 'Göteborg C',
    routeId: 0,
  },
  partTwo: {
    from: 'Göteborg C',
    to: 'Jönköping C',
    routeId: 1,
  },
};

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
    console.log('ROUTE', route);

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
    return (
      <div className="App">
        <Header />
        <Title />
        <Route section={journey.partOne} />
        {(this.state.showRoute === 0) && <SeatSelector handleSeatClick={this.handleSeatClick} selectedSeat={this.state.selectedSeatRouteOne} route={journey.partOne} /> }
        <SeatInformation selectedSeat={this.state.selectedSeatRouteOne} />
        <Route section={journey.partTwo} />
        {(this.state.showRoute === 1) && <SeatSelector handleSeatClick={this.handleSeatClick} selectedSeat={this.state.selectedSeat} /> }
        <RouteBottom />
        <ContinueButton />
        { this.state.showProceedButton && <ProceedButton handleProceedClick={this.handleProceedClick} /> }
        <Footer />
      </div>
    );
  }
}

export default App;
