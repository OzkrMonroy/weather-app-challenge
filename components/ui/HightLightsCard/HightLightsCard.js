import React from 'react';
import ProgressBar from '../progressBar/ProgressBar';
import { CardFooter, HightLightCardContainer } from './Styles';

const HightLigthsCard = ({hightLight}) => {
  const { windDir, data, showBar, title, showWind, unit, windDirText } = hightLight;
  return (
    <HightLightCardContainer>
      <h2 className="card-title">{title}</h2>
      <p className="card-information">{data.toFixed()}<span>{unit}</span></p>
      {showWind && (
        <CardFooter windDir={windDir}>
          <img src="/img/wind-direction.svg" alt="wind" className='card-footer-image'/>
          <p className="card-footer-text">{windDirText}</p>
        </CardFooter>
      )}
      {showBar && <ProgressBar percentage={data}/>}
    </HightLightCardContainer>
  );
}

export default HightLigthsCard;