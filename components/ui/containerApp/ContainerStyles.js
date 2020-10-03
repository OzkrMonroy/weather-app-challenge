import styled from '@emotion/styled'
import device from '../../../utils/breakpoints'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: row;
  }
`

export default Container