import styled from "@emotion/styled";
import device from "../../../utils/breakpoints";

export const HightLightCardContainer = styled.div`
  width: 100%;
  padding: 1rem 2rem;
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
    margin-bottom: 0;
  }
  & .card-information {
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
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: #E7E7EB;
  }
`