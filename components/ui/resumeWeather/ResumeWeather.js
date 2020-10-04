import { css } from '@emotion/core';
import React from 'react'
import { ActionsWeatherContainer, ImageResumeContainer, ResumeInformationContainer, ResumeWeatherContainer } from './ResumeStyles';

const ResumeWeather = () => {
  return (
    <ResumeWeatherContainer>
      <ActionsWeatherContainer>
        <button type="button" className="search-button">Search for places</button>
        <button type="button" className="location-button">
          <img src="/img/location.svg" alt="location button"/>
        </button>
      </ActionsWeatherContainer>
      <ImageResumeContainer>
        <img className="background-image" src="/img/Cloud-background.png" alt="cloud background" />
        <img className="weather-image" src="/img/Shower.png" alt="cloud background"/>
      </ImageResumeContainer>
      <ResumeInformationContainer>
        <p className="temperature">15<span>°C</span></p>
        <p className="weather-text">Shower</p>
        <p className="date-text">Today - Fri. 5 Jun</p>
        <p className="location-text">Guatemala</p>
      </ResumeInformationContainer>
    </ResumeWeatherContainer>
  );
}
 
export default ResumeWeather;