import styled from '@emotion/styled';
import device from '../../../utils/breakpoints';

const ResumeWeatherContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1E213A;
  height: 100vh;

  @media ${device.tablet}{
    width: 35%;
  }
`

export default ResumeWeatherContainer