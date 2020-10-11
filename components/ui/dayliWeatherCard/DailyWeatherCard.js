import React from 'react'
import getImageToShow from '../../../utils/getImageToShow';
import { DailyWeatherCardContainer } from './DailyWeatherStyles';

const DailyWeatherCard = ({forecast, unitOption}) => {
  const minTemp = forecast[`minTemp${unitOption}`]
  const maxTemp = forecast[`maxTemp${unitOption}`]

  const imageResource = getImageToShow(forecast.icon)

  return (
    <DailyWeatherCardContainer>
      <p className="text">Tomorrow</p>
      <div className="image-container">
        <img src={`/img/${imageResource}`} alt={forecast.weather} className="card-image"/>
      </div>
      <div className="temperature-container text">
        <p>{maxTemp}°C</p>
        <p className="secondary-color">{minTemp}°C</p>
      </div>
    </DailyWeatherCardContainer>
  );
}
export default DailyWeatherCard;