import React from 'react'
import { DailyWeatherCardContainer } from './DailyWeatherStyles';

const DailyWeatherCard = ({forecast, unitOption}) => {
  const minTemp = forecast[`minTemp${unitOption}`]
  const maxTemp = forecast[`maxTemp${unitOption}`]

  return (
    <DailyWeatherCardContainer>
      <p className="text">Tomorrow</p>
      <div className="image-container">
        <img src="/img/HeavyCloud.png" alt="heavy cloud" className="card-image"/>
      </div>
      <div className="temperature-container text">
        <p>{maxTemp}°C</p>
        <p className="secondary-color">{minTemp}°C</p>
      </div>
    </DailyWeatherCardContainer>
  );
}
export default DailyWeatherCard;