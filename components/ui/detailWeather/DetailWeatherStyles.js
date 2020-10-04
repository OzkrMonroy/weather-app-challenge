import styled from '@emotion/styled';
import device from '../../../utils/breakpoints';

const DetailWeatherContainer = styled.div`
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

export default DetailWeatherContainer