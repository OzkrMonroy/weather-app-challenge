import React from "react";
import DailyWeatherCard from "../dayliWeatherCard/DailyWeatherCard";
import { Container, DetailWeatherContainer } from "./DetailWeatherStyles";

const DetailWeather = () => {
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
          <DailyWeatherCard/>
          <DailyWeatherCard/>
          <DailyWeatherCard/>
          <DailyWeatherCard/>
          <DailyWeatherCard/>
          <div className="fake-card"></div>
        </div>
      </Container>
    </DetailWeatherContainer>
  );
};

export default DetailWeather;
