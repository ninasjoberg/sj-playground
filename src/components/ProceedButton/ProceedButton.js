import React from 'react';
import { connect } from 'react-redux';
import continueArrow from '../../assets/icons/continueArrow.svg';
import './ProceedButton.css';
import { proceedButtonAction } from '../../actions';

const handleProceedClick = (removeProceedButton) => {
  removeProceedButton();
};

const ProceedButton = ({ removeProceedButton }) => (
  <div className="proceed-background">
    <button className="proceed-button" onClick={() => handleProceedClick(removeProceedButton)}>Välj plats för återresa
      <img className="proceed-arrow" src={continueArrow} alt="arrow"></img>
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeProceedButton: () => { dispatch(proceedButtonAction()); },
});

export default connect('', mapDispatchToProps)(ProceedButton);

