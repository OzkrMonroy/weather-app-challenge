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
      windDirText: "N",
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
    { title: "Air Pressure", data: 0, id: "airPressure", unit: "mb" },
  ],
  forecastsForFiveDays: [
    {date: new Date(), icon: "", minTempF: 0, maxTempF: 0, minTempC: 0, maxTempC: 0 },
    {date: new Date(), icon: "", minTempF: 0, maxTempF: 0, minTempC: 0, maxTempC: 0 },
    {date: new Date(), icon: "", minTempF: 0, maxTempF: 0, minTempC: 0, maxTempC: 0 },
    {date: new Date(), icon: "", minTempF: 0, maxTempF: 0, minTempC: 0, maxTempC: 0 },
    {date: new Date(), icon: "", minTempF: 0, maxTempF: 0, minTempC: 0, maxTempC: 0 }
  ]
}

export const initialErrorState = {
  status: false,
  message: ""
}