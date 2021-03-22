import { kelvinToFahrenheitAndCelcius } from "./converterTemperature";

const getForecasts = weatherInformation => {
  const forecasts = weatherInformation.daily.filter((item, index) => index < 6).filter((item, index) => index !== 0);
  const forecastsForFiveDays = forecasts.map(forecast => {
    const { dt, weather, temp } = forecast;

    const minTemp = kelvinToFahrenheitAndCelcius(temp.min);
    const maxTemp = kelvinToFahrenheitAndCelcius(temp.max);

    return {
      date: dt,
      icon: weather[0].icon,
      minTempF: minTemp.tempF,
      maxTempF: maxTemp.tempF,
      minTempC: minTemp.tempC,
      maxTempC: maxTemp.tempC
    }
  })

  return forecastsForFiveDays;
}

export default getForecasts;