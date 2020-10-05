import styled from '@emotion/styled';
import device from '../../../utils/breakpoints';

export const ResumeWeatherContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1E213A;
  position: relative;

  @media ${device.tablet}{
    width: 35%;
  }
  @media ${device.laptop}{
    width: 25%;
  }
`
export const ActionsWeatherContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  position: absolute;
  width: 100%;

  & button {
    border: none;
    background-color: #88869D;
    padding: .6rem;
    box-shadow: 2px 3px 3px 1px #000;
  }

  & button:hover {
    cursor: pointer;
    color: black;
  }

  & .search-button {
    color: #E7E7EB;
    font-weight: 500;
    letter-spacing: .5px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
  }
  & .location-button {
    border-radius: 50%;

    & img {
      width: 20px;
      height: 20px;
    }
  }
`
export const ImageResumeContainer = styled.div`
  width: 100%;
  position: relative;
  height: 50vh;

  @media ${device.landscapeMobile} {
    height: 110vh;
  }

  & .background-image {
    top: 20%;
    left: -20%;
    opacity: .1;
    position: absolute;
    width: 147%;
    z-index: 1;  
  }
  & .weather-image {
    width: 35%;
    position: absolute;
    top: 40%;
    left: 35%;
  }
`
export const ResumeInformationContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media ${device.landscapeMobile} {
    height: 100vh;
  }

  & p {
    text-align: center;
    color: #A09FB1;
  }
  
  & .temperature {
    font-size: 85px;
    margin: 0 0 1rem;
    color: #E7E7EB;
  }
  & .temperature span {
    font-size: 35px;
  }

  & .weather-text {
    font-size: 25px;
  }
  & .date-text, & .location-text {
    font-size: 14px;
  }
`

