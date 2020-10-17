import React from 'react';
import ProgressBar from '../progressBar/ProgressBar';
import { CardFooter, HightLightCardContainer } from './Styles';

const HightLigthsCard = ({hightLight}) => {
  return (
    <HightLightCardContainer>
      <h2 className="card-title">{hightLight.title}</h2>
      <p className="card-information">{hightLight.data.toFixed()}<span>{hightLight.unit}</span></p>
      {hightLight.showWind && (
        <CardFooter>
          <img src="/img/wind-direction.svg" alt="wind" className={`card-footer-image ${hightLight.windDir}`}/>
          <p className="card-footer-text">{hightLight.windDir}</p>
        </CardFooter>
      )}
      {hightLight.showBar && <ProgressBar percentage={hightLight.data}/>}
    </HightLightCardContainer>
  );
}

export default HightLigthsCard;