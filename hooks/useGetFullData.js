import { useState } from "react";
import { initialErrorState, initialFullWeatherData } from "../utils/initialState";

const useGetFullWeatherData = () => {
  const [fullWeatherData, setFullWeatherData] = useState(initialFullWeatherData);
  const [error, setError] = useState(initialErrorState)

  const getFullWeatherDataFromApi = async ( longOrCityToSearch = "New York", latOrCountryToSearch = "USA" ) => {
    const url = `https://api.aerisapi.com/batch/${longOrCityToSearch},${latOrCountryToSearch}?&format=json&client_id=${process.env.client_id}&client_secret=${process.env.client_secret}&requests=/conditions,/forecasts%3Ffilter=day%26limit=5%26from=tomorrow`;

    try {
      let response = await fetch(url);
      let weatherData = await response.json();

      const {
        weatherPrimary,
        windSpeedMPH,
        humidity,
        visibilityMI,
        pressureMB,
        icon,
        tempC,
        tempF,
      } = weatherData.response.responses[0].response[0].periods[0];

      const fullLocationName = weatherData.response.responses[0].response[0].profile.tz;
      const forecastsForFiveDays = weatherData.response.responses[1].response[0].periods;

      initialFullWeatherData.hightlightsToday[0].data = windSpeedMPH;
      initialFullWeatherData.hightlightsToday[1].data = humidity;
      initialFullWeatherData.hightlightsToday[2].data = visibilityMI;
      initialFullWeatherData.hightlightsToday[3].data = pressureMB;

      const nameCity = fullLocationName.split("/")[1]
      const locationName = nameCity.replace("_", " ");

      const todayWeather = {
        tempC,
        tempF,
        weather: weatherPrimary,
        icon,
      };
      const hightlightsToday = initialFullWeatherData.hightlightsToday;

      setFullWeatherData({
        locationName,
        todayWeather,
        hightlightsToday,
        forecastsForFiveDays,
      });
    } catch (error) {
      setError({
        status: true,
        message: error.message
      });
      setTimeout(() => {
        setError(initialErrorState);
      }, 3000);
    }
  };

  return {
    fullWeatherData,
    error,
    setError,
    getFullWeatherDataFromApi,
  };
};

export default useGetFullWeatherData;
