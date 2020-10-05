import React from 'react';
import { HightLightCardContainer } from './HightLightCardStyles';

const HightLigthsCard = () => {
  return (
    <HightLightCardContainer>
      <h2 className="card-title">Wind Status</h2>
      <p className="card-information">7<span>mph</span></p>
      <p className="card-footer">WSW</p>
    </HightLightCardContainer>
  );
}
 
export default HightLigthsCard;