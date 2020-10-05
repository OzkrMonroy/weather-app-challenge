import styled from '@emotion/styled';
import device from '../../../utils/breakpoints';

export const DetailWeatherContainer = styled.div`
  width: 100%;
  background-color: #100E1D;
  z-index: 10;

  @media ${device.tablet}{
    width: 65%;
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
    width: 75%;
  }

  & .temperature-units-options {
    display: none;

    @media ${device.tablet}{
      display:flex;
      justify-content: flex-end;
      margin-bottom: 2rem;
    }

    & button {
      border: none;
      background-color: #88869D;
      padding: .6rem .83rem .65rem .82rem;
      box-shadow: 2px 3px 3px 1px #000;
      border-radius: 50%;
      font-size: 14px;
      text-align: center;
      font-family: 'Raleway', sans-serif;
      font-weight: 700;
    }

    & .celcius-option {
      margin-right: 10px;
      background-color: #E7E7EB;
    }
    & .fahrenheit-option {
      color: #E7E7EB;
    }
  }
  & .daily-weather-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 2rem;

    & .fake-card {
      display: none;
    }

    @media ${device.tablet}{
      padding: 0;
      
      & .fake-card {
        display: block;
        width: 30%;
        margin-bottom: 10px;
        margin-right: 10px;
      }
    }
    @media ${device.laptop}{
      & .fake-card {
        display: none;
      }
    }

  }
`