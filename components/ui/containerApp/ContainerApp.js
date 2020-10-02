import React from 'react'
import DetailWeather from '../detailWeather/DetailWeather';
import ResumeWeather from '../resumeWeather/ResumeWeather';
import Container from './ContainerStyles';

const ContainerApp = () => {
  return (
    <Container>
      <ResumeWeather/>
      <DetailWeather/>
    </Container>
  );
}
 
export default ContainerApp;