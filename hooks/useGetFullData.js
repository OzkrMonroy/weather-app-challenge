import { useState } from "react";
import { initialFullWeatherData } from "../utils/initialState";

const useGetFullWeatherData = () => {
  const [fullWeatherData, setFullWeatherData] = useState(initialFullWeatherData);
  const longOrCity = 'Guatemala';
  const latOrCountry = 'Guatemala';

  const getFullWeatherDataFromApi = ( longOrCityToSearch = longOrCity, latOrCountryToSearch = latOrCountry ) => {
    const url = `https://api.aerisapi.com/batch/${longOrCityToSearch},${latOrCountryToSearch}?&format=json&client_id=${process.env.client_id}&client_secret=${process.env.client_secret}&requests=/conditions,/forecasts%3Ffilter=day%26limit=5%26from=tomorrow`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      if (!json.success) {
        console.log("Oh no!");
      } else {
        const { weatherPrimary, windSpeedMPH, humidity, visibilityMI, pressureMB, icon, tempC, tempF } = json.response.responses[0].response[0].periods[0];

        const locationName = json.response.responses[0].response[0].profile.tz;
        const forecastsForFiveDays = json.response.responses[1].response[0].periods;

        initialFullWeatherData.hightlightsToday[0].data = windSpeedMPH
        initialFullWeatherData.hightlightsToday[1].data = humidity;
        initialFullWeatherData.hightlightsToday[2].data = visibilityMI;
        initialFullWeatherData.hightlightsToday[3].data = pressureMB;

        const todayWeather = {
          tempC,
          tempF,
          weather: weatherPrimary,
          locationName,
          icon
        }
        const hightlightsToday = initialFullWeatherData.hightlightsToday

        setFullWeatherData({
          todayWeather,
          hightlightsToday,
          forecastsForFiveDays
        })
      }
    });
  }
  

    return {
      fullWeatherData,
      getFullWeatherDataFromApi
    }
};

export default useGetFullWeatherData