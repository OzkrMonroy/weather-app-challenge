import styled from '@emotion/styled';
import device from '../../../utils/breakpoints';

const DetailWeatherContainer = styled.div`
  width: 100%;
  background-color: #100E1D;
  height: 100vh;

  @media ${device.tablet}{
    width: 65%;
  }
`

export default DetailWeatherContainer