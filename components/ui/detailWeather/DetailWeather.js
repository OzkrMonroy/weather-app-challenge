import React from "react";
import DailyWeatherCard from "../dayliWeatherCard/DailyWeatherCard";
import HightLigthsCard from "../HightLightsCard/HightLightsCard";
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
        <div>
          <h1 className="today-hightlights-title">Today's Hightlights</h1>
          <div className="today-hightlights-container">
            <HightLigthsCard/>
            <HightLigthsCard/>
            <HightLigthsCard/>
            <HightLigthsCard/>
          </div>
        </div>
      </Container>
    </DetailWeatherContainer>
  );
};

export default DetailWeather;
