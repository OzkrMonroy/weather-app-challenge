import styled from '@emotion/styled'
import device from '../../../utils/breakpoints'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  @media ${device.tablet} {
    flex-direction: row;
  }
`

export default Container