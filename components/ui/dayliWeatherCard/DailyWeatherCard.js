import React from 'react'
import getImageToShow from '../../../utils/getImageToShow';
import { DailyWeatherCardContainer } from './DailyWeatherStyles';

const DailyWeatherCard = ({forecast, unitOption}) => {
  const minTemp = forecast[`minTemp${unitOption}`].toFixed();
  const maxTemp = forecast[`maxTemp${unitOption}`].toFixed();

  const imageResource = getImageToShow(forecast.icon)
  const date = forecast.validTime ? new Date(forecast.validTime) : new Date();
  const dateArray = date.toDateString().split(" ");

  return (
    <DailyWeatherCardContainer>
      <p className="text">{dateArray[0]}. {dateArray[2]} {dateArray[1]}</p>
      <div className="image-container">
        <img src={`/img/${imageResource}`} alt={forecast.weather} className="card-image"/>
      </div>
      <div className="temperature-container text">
        <p>{maxTemp}°{unitOption}</p>
        <p className="secondary-color">{minTemp}°{unitOption}</p>
      </div>
    </DailyWeatherCardContainer>
  );
}
export default DailyWeatherCard;