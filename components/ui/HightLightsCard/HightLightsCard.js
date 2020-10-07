import React from 'react';
import { HightLightCardContainer } from './HightLightCardStyles';

const HightLigthsCard = () => {
  return (
    <HightLightCardContainer>
      <h2 className="card-title">Wind Status</h2>
      <p className="card-information">7<span>mph</span></p>
      {/* <p className="card-footer">WSW</p> */}
      <div className="progressBar-container">
        <div className="percentages-container">
          <p>0</p>
          <p>50</p>
          <p>100</p>
        </div>
        <div className="progress-bar"></div>
      </div>
    </HightLightCardContainer>
  );
}
 
export default HightLigthsCard;