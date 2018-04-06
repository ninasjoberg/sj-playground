import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import Trip from './components/Trip/Trip';
import Footer from './components/Footer/Footer';
import ContinueButton from './components/ContinueButton/ContinueButton';
import ProceedButton from './components/ProceedButton/ProceedButton';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { outwardTrip, returnTrip } = this.props;
    return (
      <div className="App" id="addedExtras">
        <Header />
        <Title />
        <Trip trip={outwardTrip[0]} />
        { returnTrip && <Trip trip={returnTrip[0]} /> }
        <ContinueButton />
        { this.props.showProceedButton && <ProceedButton /> }
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  outwardTrip: state.journey.outwardTrip,
  returnTrip: state.journey.returnTrip,
  showProceedButton: state.journey.proceedButton,
});

export default connect(mapStateToProps)(App);
