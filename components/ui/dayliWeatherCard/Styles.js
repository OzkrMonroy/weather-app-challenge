import styled from "@emotion/styled";
import device from "../../../utils/breakpoints";

export const DailyWeatherCardContainer = styled.div`
  height: 200px;
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

    & .card-image {
      height: 100%;
      width: 100%;
      object-fit: contain;
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
