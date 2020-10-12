import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Container from "../components/ui/containerApp/ContainerStyles";
import DetailWeather from "../components/ui/detailWeather/DetailWeather";
import ResumeWeather from "../components/ui/resumeWeather/ResumeWeather";
import { initialForecastWeather, initialHightLights, initialTodayWeather } from "../utils/initialState";

export default function Home() {
  const [todayWeather, setTodayWeather] = useState(initialTodayWeather);
  const [hightlightsToday, setHightlightsToday] = useState(initialHightLights);
  const [forecastsForFiveDays, setForecastsForFiveDays] = useState(initialForecastWeather);
  const [unitOption, setUnitOption] = useState("C");
  const [longOrCity, setLongOrCity] = useState("Guatemala");
  const [latOrCountry, setLatOrCountry] = useState("Guatemala");

  useEffect(() => {
    getWeatherDataFromApi();
  }, []);

  const getWeatherDataFromApi = ( longOrCityToSearch = longOrCity, latOrCountryToSearch = latOrCountry) => {
    console.log('Enviando petición');
    const url = `https://api.aerisapi.com/batch/${longOrCityToSearch},${latOrCountryToSearch}?&format=json&client_id=zD3HHXPiRnxjq4cm42IGr&client_secret=2YhJRrg2JfMefcEqKAkjQ9zhyid3zfe6kUzNrTXt&requests=/conditions,/forecasts%3Ffilter=day%26limit=5%26from=tomorrow`;

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

          const forecastsWeather = json.response.responses[1].response[0].periods;

          initialHightLights[0].data = windSpeedMPH;
          initialHightLights[1].data = humidity;
          initialHightLights[2].data = visibilityMI;
          initialHightLights[3].data = pressureMB;

          setTodayWeather({
            tempC,
            tempF,
            weather: weatherPrimary,
            locationName,
            icon
          });
          setHightlightsToday(initialHightLights);
          setForecastsForFiveDays(forecastsWeather);
          setLongOrCity(longOrCityToSearch);
          setLatOrCountry(latOrCountryToSearch);
        }
      });
  };

  return (
    <Layout>
      <Container>
        <ResumeWeather
          todayWeather={todayWeather}
          unitOption={unitOption}
          getWeatherFunction={getWeatherDataFromApi}
        />
        <DetailWeather
          hightLights={hightlightsToday}
          forecastsWeather={forecastsForFiveDays}
          setUnitOption={setUnitOption}
          unitOption={unitOption}
        />
      </Container>
    </Layout>
  );
}
