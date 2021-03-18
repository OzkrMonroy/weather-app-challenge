export const initialFullWeatherData = {
  locationName: 'N/A',
  todayWeather: {
    tempC: 0,
    tempF: 0,
    weather: 'N/A',
    icon: ''
  },
  hightlightsToday: [
    {
      title: "Wind status",
      windDir: "N/A",
      data: 0,
      showWind: true,
      id: "windy",
      unit: "mph",
    },
    {
      title: "Humidity",
      data: 0,
      showBar: true,
      id: "humidity",
      unit: "%",
    },
    { title: "Visibility", data: 0, id: "visibility", unit: "miles" },
    { title: "Wind status", data: 0, id: "windStatus", unit: "mb" },
  ],
  forecastsForFiveDays: [
    {dt: new Date(), temp: {max: 0, min: 0}, weather: [{icon: ""}]},
    {dt: new Date(), temp: {max: 0, min: 0}, weather: [{icon: ""}]},
    {dt: new Date(), temp: {max: 0, min: 0}, weather: [{icon: ""}]},
    {dt: new Date(), temp: {max: 0, min: 0}, weather: [{icon: ""}]},
    {dt: new Date(), temp: {max: 0, min: 0}, weather: [{icon: ""}]},
  ]
}

export const initialErrorState = {
  status: false,
  message: ""
}