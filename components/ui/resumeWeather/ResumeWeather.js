import React, { useState } from 'react'
import Form from '../Form/Form';
import { ActionsWeatherContainer, ImageResumeContainer, ResumeInformationContainer, ResumeWeatherContainer } from './ResumeStyles';

const ResumeWeather = ({todayWeather, unitOption, getWeatherFunction}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showForm = () => {
    setIsFormVisible(!isFormVisible)
  }

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      getWeatherFunction(position.coords.latitude, position.coords.longitude)
    }, error => {
      console.log('No se obtuvo los permisos', error);
    })
  }

  return (
    <ResumeWeatherContainer>
      <ActionsWeatherContainer>
        <button type="button" className="search-button" onClick={showForm}>Search for places</button>
        <button type="button" className="location-button" onClick={getCurrentLocation}>
          <img src="/img/location.svg" alt="location button"/>
        </button>
      </ActionsWeatherContainer>
      <ImageResumeContainer>
        <img className="background-image" src="/img/Cloud-background.png" alt="cloud background" />
        <img className="weather-image" src="/img/Shower.png" alt="cloud background"/>
      </ImageResumeContainer>
      <ResumeInformationContainer>
        <p className="temperature">{todayWeather.currentTemperature}<span>°{unitOption}</span></p>
        <p className="weather-text">{todayWeather.weather}</p>
        <p className="date-text">Today - Fri. 5 Jun</p>
        <p className="location-text">{todayWeather.locationName}</p>
      </ResumeInformationContainer>
      <Form isVisible={isFormVisible} setVisible={showForm} getWeatherFunction={getWeatherFunction}/>
    </ResumeWeatherContainer>
  );
}
 
export default ResumeWeather;