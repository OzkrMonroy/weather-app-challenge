import React from 'react'
import { DailyWeatherCardContainer } from './DailyWeatherStyles';

const DailyWeatherCard = ({forecast}) => {

  console.log(forecast);

  return (
    <DailyWeatherCardContainer>
      <p className="text">Tomorrow</p>
      <div className="image-container">
        <img src="/img/HeavyCloud.png" alt="heavy cloud" className="card-image"/>
      </div>
      <div className="temperature-container text">
        <p>16°C</p>
        <p className="secondary-color">11°C</p>
      </div>
    </DailyWeatherCardContainer>
  );
}
 
export default DailyWeatherCard;