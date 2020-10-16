import styled from '@emotion/styled'

const AlertConainer = styled.div`
  position: absolute;
  color: #a09fb1;
  font-size: 1.5rem;
  top: ${props => props.show ? '0' : '-100%'};
  background-color: #100E1D;
  left: 0;
  right: 0;
  z-index: 20;
  text-align: center;
  transition: top 1.3s ease-in-out;
`

export default AlertConainer