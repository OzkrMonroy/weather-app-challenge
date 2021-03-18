import { useState } from "react";
import { initialErrorState, initialFullWeatherData } from "../utils/initialState";

const useGetFullWeatherData = () => {
  const [fullWeatherData, setFullWeatherData] = useState(initialFullWeatherData);
  const [error, setError] = useState(initialErrorState)

  const getFullWeatherDataFromApi = async (cityName = "New York") => {
    let coords = await getCoordinates(cityName);
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.app_id}&exclude=minutely,hourly&lang=es`;

    try {
      let response = await fetch(url);
      let weatherInformation = await response.json();
      console.log(weatherInformation);
      
      const fullLocationName = weatherInformation.timezone
      const nameCity = fullLocationName.split("/")[1]
      const locationName = nameCity.replace("_", " ");

      const {humidity, wind_speed, wind_deg , visibility, pressure, temp, weather} = weatherInformation.current;
      const tempF = kelvinToFahrenheit(temp);
      const tempC = kelvinToCelcius(temp);
      
      
      initialFullWeatherData.hightlightsToday[0].data = wind_speed;
      initialFullWeatherData.hightlightsToday[0].windDir = wind_deg;
      initialFullWeatherData.hightlightsToday[1].data = humidity;
      initialFullWeatherData.hightlightsToday[2].data = visibility;
      initialFullWeatherData.hightlightsToday[3].data = pressure;
      const hightlightsToday = initialFullWeatherData.hightlightsToday;
      
      // const forecastsForFiveDays = weatherData.response.responses[1].response[0].periods;

      const todayWeather = {
        tempF,
        tempC,
        weather: weather[0].description,
        icon: weather[0].icon,
      };
      console.log(locationName, hightlightsToday, todayWeather);

      setFullWeatherData({
        ...fullWeatherData,
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

  const kelvinToFahrenheit = kelvin => 1.8*(kelvin - 273.15) + 32;
  const kelvinToCelcius = kelvin => kelvin - 273;

  return {
    fullWeatherData,
    error,
    setError,
    getFullWeatherDataFromApi,
  };
};

export default useGetFullWeatherData;
