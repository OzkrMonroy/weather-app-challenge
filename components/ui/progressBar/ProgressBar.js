import React from "react";
import { ProgressBarContainer } from "./Styles";

const ProgressBar = ({ percentage }) => {
  return (
    <ProgressBarContainer percentage={`${percentage.toString()}%`}>
      <div className="percentages-container">
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </div>
      <div className="progress-bar"></div>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
