import styled from "@emotion/styled";
import device from "../../../utils/breakpoints";

export const DailyWeatherCardContainer = styled.div`
  height: 177px;
  display: flex;
  flex-direction: column;
  background-color: #1e213a;
  width: 45%;
  margin-bottom: 1.5rem;
  padding: 0.6rem;

  @media ${device.tablet} {
    width: 30%;
    margin-bottom: 10px;
    margin-right: 10px;
  }
  @media ${device.laptop}{
    width: 18%;
  }

  & .text {
    height: 25%;
    color: #e7e7eb;
    margin: 0;
    text-align: center;
  }
  & .image-container {
    height: 50%;
    position: relative;
    text-align: center;

    & .card-image {
      position: absolute;
      top: -25px;
      width: 100%;
      left: -20px;
      right: 0;
      bottom: 0;
      margin: auto;

      @media ${device.landscapeMobile}{
        top: -25px;
        width: 50%;
        left: -20px;
      }
      @media ${device.tablet}{
        width: 85%;
      }
    }
  }
  & .temperature-container {
    display: flex;
    justify-content: space-between;

    & .secondary-color {
      color: #a09fb1;
    }
  }
`;
