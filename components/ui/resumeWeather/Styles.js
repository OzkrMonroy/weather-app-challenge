import styled from '@emotion/styled';
import device from '../../../utils/breakpoints';

export const ResumeWeatherContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1E213A;
  position: relative;

  @media ${device.tablet}{
    width: 30%;
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
  z-index: 5;

  @media ${device.tablet}{
    padding: 2rem 1rem;
  }
`
export const ImageResumeContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 5rem;

  @media ${device.landscapeMobile} {
    height: 100vh;
  }

  & .background-image {
    top: 0;
    left: -20%;
    opacity: .1;
    position: absolute;
    width: 147%;
    z-index: 1;
  }
  & .weather-image {
    width: 40%;
    display: block;
    margin: 4rem auto 3rem;

    @media ${device.landscapeMobile}{
      width: 30%;
      margin-bottom: 4rem;
    }
    @media ${device.laptop}{
      margin-bottom: 5rem;
    }
  }
`
export const ResumeInformationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;

  @media ${device.tablet}{
    padding-top: 0;
  }

  & p {
    text-align: center;
    color: #A09FB1;
  }
  
  & .temperature {
    font-size: 85px;
    margin-bottom: 1rem;
    color: #E7E7EB;
    font-weight: 500;

    @media ${device.laptop}{
      font-size: 100px;
      margin-bottom: 6rem;

      & span {
        font-size: 50px;
      }
    }
  }
  & .temperature span {
    font-size: 35px;
    font-weight: 300;
  }

  & .weather-text {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 5rem;

     @media ${device.laptop}{
      font-size: 36px;
      margin-bottom:6rem;
     }
  }
  & .location-date-container {
    width: 100%;
    position: absolute;
    bottom: 1rem;

    & .date-text, & .location-text {
    font-size: 14px;

    @media ${device.laptop}{
      font-size: 18px;
     }
  }
  }
`

