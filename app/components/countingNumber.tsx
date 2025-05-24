import React from "react";
import "../css/counting-number.css";

const CountingNumber = () => {
  return (
    <div className="main">
      <div className="counting-number-section">
        <div className="counting-number">
          <div className="counting-number-container">
            <p className="numbers">10k+</p>
            <p className="counting-number-text">Happy Client</p>
          </div>
          <div className="counting-number-container">
            <p className="numbers">2k+</p>
            <p className="counting-number-text">Member Active</p>
          </div>
          <div className="counting-number-container">
            <p className="numbers">4.8</p>
            <p className="counting-number-text">Client Reviews</p>
          </div>
          <div className="counting-number-container">
            <p className="numbers">5+</p>
            <p className="counting-number-text">Exprience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountingNumber;
