import React from 'react';
import continueArrow from '../../assets/icons/continueArrow.svg';
import './ProceedButton.css';

const ProceedButton = ({ handleProceedClick }) => {
  return (
    <div className="proceed-background">
      <button className="proceed-button" onClick={handleProceedClick}>Välj plats för återresa
        <img className="proceed-arrow" src={continueArrow} alt="arrow"></img>
      </button>
    </div>
  );
};

export default ProceedButton;
