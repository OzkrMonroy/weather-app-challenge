import React, { useState } from "react";
import useGetFormatDate from "../../../hooks/useGetFormatDate";
import getImageToShow from "../../../utils/getImageToShow";
import getWeatherDataByUserLocation from "../../../utils/getWeatherDataByUserLocation";
import { Button } from "../button/Button";
import { ActionsWeatherContainer, ImageResumeContainer, ResumeInformationContainer, ResumeWeatherContainer } from "./Styles";
import Form from "../Form/Form";

const ResumeWeather = ({ fullWeatherData, unitOption, getWeatherFunction, setError }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { todayWeather, locationName } = fullWeatherData
  const { formatedDate } = useGetFormatDate();
  const imageResource = getImageToShow(todayWeather.icon);

  const currentTemp = todayWeather[`temp${unitOption}`].toFixed();
  
  const showForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const getCurrentLocation = () => {
    getWeatherDataByUserLocation(getWeatherFunction, setError)
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
          <p className="date-text">Today - {formatedDate}</p>
          <p className="location-text">{locationName}</p>
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
