import styled from "@emotion/styled";
import device from "../../../utils/breakpoints";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: inherit;
  top: 0;
  right: ${props => props.isVisible ? '0' : '100%' };
  z-index: 10;
  transition: all .7s ease;

  @media ${device.tablet}{
    padding: 2rem 1rem;
  }

  & .button-container{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  
    & .close-button {
      border: none;
      width: 2rem;
      background-color: transparent;
      & img {
        width: 100%;
      }
    }
    & .close-button:hover {
      cursor: pointer;
      border: none;
    }
  }

`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  & input[type="text"] {
    width: 100%;
    color: #616475;
    background: none;
    border: 1px solid #616475;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 16px;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  & input:focus {
    outline: none;
  }

  & .form-button {
    width: 100%;
    border: none;
    background-color: #3C47E9;
    color: #fff;
    padding: 1rem;
    font-family: 'Raleway' , sans-serif;
    font-weight: 700;
  }
  & .form-button:hover {
    cursor: pointer;
  }
`

export const Error = styled.div`
  color: #a09fb1;
  text-align: center;
  margin-bottom: 1rem;
`