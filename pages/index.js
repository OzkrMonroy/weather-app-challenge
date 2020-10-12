import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Container from "../components/ui/containerApp/ContainerStyles";
import DetailWeather from "../components/ui/detailWeather/DetailWeather";
import ResumeWeather from "../components/ui/resumeWeather/ResumeWeather";
import useGetFullWeatherData from "../hooks/useGetFullData";

export default function Home() {
  const [unitOption, setUnitOption] = useState("C");
  const {fullWeatherData, getFullWeatherDataFromApi} = useGetFullWeatherData();

  useEffect(() => {
    getFullWeatherDataFromApi();
  }, []);

  return (
    <Layout>
      <Container>
        <ResumeWeather
          todayWeather={fullWeatherData.todayWeather}
          unitOption={unitOption}
          getWeatherFunction={getFullWeatherDataFromApi}
        />
        <DetailWeather
          hightLights={fullWeatherData.hightlightsToday}
          forecastsWeather={fullWeatherData.forecastsForFiveDays}
          setUnitOption={setUnitOption}
          unitOption={unitOption}
        />
      </Container>
    </Layout>
  );
}
