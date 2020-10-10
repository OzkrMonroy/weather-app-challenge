import React from "react";
import DailyWeatherCard from "../dayliWeatherCard/DailyWeatherCard";
import HightLigthsCard from "../HightLightsCard/HightLightsCard";
import { Container, DetailWeatherContainer } from "./DetailWeatherStyles";

const DetailWeather = ({hightLights, forecastsWeather, setUnitOption}) => {
  return (
    <DetailWeatherContainer>
      <Container>
        <div className="temperature-units-options">
          <button type="button" className="celcius-option">
            °C
          </button>
          <button type="button" className="fahrenheit-option">
            °F
          </button>
        </div>
        <div className="daily-weather-container">
          {forecastsWeather.map((forecast, index) => (
            <DailyWeatherCard key={index} forecast={forecast}/>
          ))}
          <div className="fake-card"></div>
        </div>
        <div>
          <h1 className="today-hightlights-title">Today's Hightlights</h1>
          <div className="today-hightlights-container">
            {hightLights.map(hightLight => (
              <HightLigthsCard hightLight={hightLight} key={hightLight.id}/>
            ))}
          </div>
        </div>
      </Container>
    </DetailWeatherContainer>
  );
};

export default DetailWeather;
