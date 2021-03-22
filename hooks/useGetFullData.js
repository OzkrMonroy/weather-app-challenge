import { useState } from "react";
import { kelvinToFahrenheitAndCelcius } from "../utils/converterTemperature";
import { formatLocationName, formatStringToCapitalize } from "../utils/formatString";
import getForecasts from "../utils/getForecasts";
import getHightLightsToday from "../utils/getHightLightsToday";
import { initialErrorState, initialFullWeatherData } from "../utils/initialState";

const useGetFullWeatherData = () => {
  const [fullWeatherData, setFullWeatherData] = useState(initialFullWeatherData);
  const [error, setError] = useState(initialErrorState);

  const byName = async (cityName = "New York") => {
    let coords = await getCoordinates(cityName);
    try {
      await getFullWeatherDataFromApi(coords.lat, coords.lon)
    } catch (error) {
      console.log(error);
    }
  }

  const byCoords = async (lat, lon) => {
    try {
      await getFullWeatherDataFromApi(lat, lon)
    } catch (error) {
      console.log(error);
    }
  }

  const getFullWeatherDataFromApi = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.app_id}&exclude=minutely,hourly&lang=es`;

    try {
      let response = await fetch(url);
      let weatherInformation = await response.json();
      
      const { temp, weather} = weatherInformation.current;
      const locationName = formatLocationName(weatherInformation.timezone);
      const weatherDescription = formatStringToCapitalize(weather[0].description);
      const { tempF, tempC } = kelvinToFahrenheitAndCelcius(temp)
      
      const hightlightsToday = getHightLightsToday(initialFullWeatherData, weatherInformation)
      
      const forecastsForFiveDays = getForecasts(weatherInformation);

      const todayWeather = {
        tempF,
        tempC,
        weather: weatherDescription,
        icon: weather[0].icon,
      };

      setFullWeatherData({
        forecastsForFiveDays,
        locationName,
        todayWeather,
        hightlightsToday
      });
      
    } catch (error) {
      setError({
        status: true,
        message: error.message
      });
      setTimeout(() => {
        setError(initialErrorState);
      }, 4000);
    }
  };

  const getCoordinates = async cityName => {
    let coordinates;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.app_id}&lang=es`;

    try {
      let response = await fetch(url);
      let weatherInformation = await response.json();
      coordinates = weatherInformation.coord
    } catch (error) {
      console.log(error);
    }
    return coordinates;
  }

  return {
    fullWeatherData,
    error,
    setError,
    getFullWeatherDataFromApi: { byName, byCoords},
  };
};

export default useGetFullWeatherData;
