import React from 'react';
import continueArrow from '../../assets/icons/continueArrow.svg';
import './ContinueButton.css';

const ContinueButton = ({ handleContinueClick }) => {
  return (
    <div className="continue-background">
      <button className="continue-button" onClick={handleContinueClick}>Fortsätt
        <img className="continue-arrow" src={continueArrow} alt="arrow"></img>
      </button>
    </div>
  );
};

export default ContinueButton;
