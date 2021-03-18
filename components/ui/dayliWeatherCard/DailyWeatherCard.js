import React from 'react'
import useGetFormatDate from '../../../hooks/useGetFormatDate';
import getImageToShow from '../../../utils/getImageToShow';
import { DailyWeatherCardContainer } from './Styles';

const DailyWeatherCard = ({forecast, unitOption}) => {
  const { formatedDate } = useGetFormatDate(forecast.dt);
  const imageResource = getImageToShow(forecast.weather[0].icon);

  // const minTemp = forecast[`minTemp${unitOption}`].toFixed();
  // const maxTemp = forecast[`maxTemp${unitOption}`].toFixed();
  const minTemp = forecast.temp.min.toFixed();
  const maxTemp = forecast.temp.max.toFixed();

  return (
    <DailyWeatherCardContainer>
      <p className="text">{formatedDate}</p>
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