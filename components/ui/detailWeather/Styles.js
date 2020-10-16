import styled from '@emotion/styled';
import device from '../../../utils/breakpoints';

export const DetailWeatherContainer = styled.div`
  width: 100%;
  background-color: #100E1D;
  z-index: 10;

  @media ${device.tablet}{
    width: 70%;
  }
  @media ${device.laptop}{
    width: 75%;
  }
`
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;

  @media ${device.tablet}{
    width: 85%;
  }

  & .temperature-units-options {
    display: none;

    @media ${device.tablet}{
      display:flex;
      justify-content: flex-end;
      margin-bottom: 2rem;
    }
  }
  & .daily-weather-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem 2rem 0;
    margin-bottom: 2rem;

    & .fake-card {
      display: none;
    }

    @media ${device.tablet}{
      padding: 0;

      & div:nth-of-type(3){
        margin-right: 0;
      }
      & div:nth-of-type(4){
        margin-right: 10px;
      }
      & div:nth-of-type(5){
        margin-right: 0;
      }
      & .fake-card {
        display: block;
        width: 30%;
        margin-bottom: 10px;
        margin-right: 10px;
      }
    }
    @media ${device.laptop}{
      & div:nth-of-type(3){
        margin-right: 10px;
      }
      & .fake-card {
        display: none;
      }
    }
  }
  & .today-hightlights-title {
    text-align: center;
    color: #E7E7EB;
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 2rem;

    @media ${device.tablet}{
      text-align: start;
    }
  }
  & .today-hightlights-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 1.3rem;
    margin-bottom: 2rem;

    @media ${device.tablet}{
      padding: 0;
    }
  }
`