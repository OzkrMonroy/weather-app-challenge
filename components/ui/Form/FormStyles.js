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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  & .search-input-container {
    width: 68%;
    display: flex;
    border: 1px solid #E7E7EB;
    padding: .9rem;

    img {
      width: 16px;
    }

    & input {
      width: 90%;
      color: #616475;
      background: none;
      border: none;
      font-family: 'Raleway', sans-serif;
      font-weight: 500;
      font-size: 16px;
      padding-left: 10px;
    }
    & input:focus {
      outline: none;
    }
  }

  & .form-button {
    width: 30%;
    border: none;
    background-color: #3C47E9;
    color: #fff;
    padding: 1.1rem;
    font-family: 'Raleway' , sans-serif;
    font-weight: 700;
  }
  & .form-button:hover {
    cursor: pointer;
  }
`