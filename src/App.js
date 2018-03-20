import React from 'react';
import './App.css';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Heading from './components/Heading/Heading';
import SeatSelection from './components/SeatSelection/SeatSelection';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      activeBreadcrumb: 3
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Breadcrumbs activeBreadcrumb={this.state.activeBreadcrumb} />
        <Heading />
        <SeatSelection />
      </div>
    );
  }
}

export default App;
