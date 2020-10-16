import styled from "@emotion/styled";
import device from "../../../utils/breakpoints";

export const HightLightCardContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #1E213A;
  margin-bottom: 2rem;

  @media ${device.tablet}{
    width: 45%;
  }
  @media ${device.laptop}{
    width: 48%;
  }

  & .card-title {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #E7E7EB;
    margin-bottom: 1rem;
    margin-top: 0;
  }
  & .card-information {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 64px;
    font-weight: 700;
    text-align: center;
    color: #E7E7EB;
    margin: 0 0 1.5rem;

    & span {
      font-size: 36px;
      font-weight: 500;
    }
  }
  & .card-footer {
    padding-top: 2rem;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: #E7E7EB;
  }
`