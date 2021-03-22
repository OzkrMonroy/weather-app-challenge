import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Alert from "../components/ui/Alert/Alert";
import Container from "../components/ui/containerApp/ContainerStyles";
import DetailWeather from "../components/ui/detailWeather/DetailWeather";
import ResumeWeather from "../components/ui/resumeWeather/ResumeWeather";
import useGetFullWeatherData from "../hooks/useGetFullData";

export default function Home() {
  const [unitOption, setUnitOption] = useState("C");
  const {fullWeatherData, error, setError, getFullWeatherDataFromApi } = useGetFullWeatherData();

  useEffect(() => {
    getFullWeatherDataFromApi.byName()
  }, []);

  return (
    <Layout>
      <Container>
        <ResumeWeather
          fullWeatherData={fullWeatherData}
          unitOption={unitOption}
          getWeatherFunction={getFullWeatherDataFromApi}
          setError={setError}
        />
        <DetailWeather
          fullWeatherData={fullWeatherData}
          setUnitOption={setUnitOption}
          unitOption={unitOption}
        />
        <Alert isShowed={error.status} message={error.message}/>
      </Container>
    </Layout>
  );
}
