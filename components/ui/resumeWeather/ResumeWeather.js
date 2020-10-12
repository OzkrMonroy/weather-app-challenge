import React, { useState } from "react";
import getImageToShow from "../../../utils/getImageToShow";
import { Button } from "../button/Button";
import Form from "../Form/Form";
import { ActionsWeatherContainer, ImageResumeContainer, ResumeInformationContainer, ResumeWeatherContainer } from "./ResumeStyles";

const ResumeWeather = ({ todayWeather, unitOption, getWeatherFunction }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const imageResource = getImageToShow(todayWeather.icon);
  const date = new Date()
  const dateArray =  date.toDateString().split(" ");

  const currentTemp = todayWeather[`temp${unitOption}`].toFixed();
  
  const showForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getWeatherFunction(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.log("No se obtuvo los permisos", error);
      }
    );
  };

  return (
    <ResumeWeatherContainer>
      <ActionsWeatherContainer>
        <Button type="button" className="search-button" onClick={showForm}>
          Search for places
        </Button>
        <Button
          type="button"
          className="rounded"
          onClick={getCurrentLocation}
        >
          <img src="/img/location.svg" alt="location button" />
        </Button>
      </ActionsWeatherContainer>
      <ImageResumeContainer>
        <img
          className="background-image"
          src="/img/Cloud-background.png"
          alt="cloud background"
        />
        <img
          className="weather-image"
          src={`/img/${imageResource}`}
          alt="Weather Icon"
        />
      </ImageResumeContainer>
      <ResumeInformationContainer>
        <p className="temperature">
          {currentTemp}
          <span>°{unitOption}</span>
        </p>
        <p className="weather-text">{todayWeather.weather}</p>
        <div className="location-date-container">
          <p className="date-text">Today - {dateArray[0]}. {dateArray[2]} {dateArray[1]}</p>
          <p className="location-text">{todayWeather.locationName}</p>
        </div>
      </ResumeInformationContainer>
      <Form
        isVisible={isFormVisible}
        setVisible={showForm}
        getWeatherFunction={getWeatherFunction}
      />
    </ResumeWeatherContainer>
  );
};

export default ResumeWeather;
