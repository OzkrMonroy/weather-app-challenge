import styled from "@emotion/styled";

export const Button = styled.button`
  border: none;
  background-color: #88869D;
  padding: .6rem;
  box-shadow: 2px 3px 3px 1px #000;
  color: #E7E7EB;

  &:hover {
    cursor: pointer;
  }

  &.search-button {
    font-weight: 500;
    letter-spacing: .5px;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }
  &.rounded {
    border-radius: 50%;

    & img {
      width: 20px;
      height: 20px;
    }
  }
  &.text-bold {
    font-weight: 700;
    padding: .6rem .83rem .65rem .82rem;
  }
  &.active {
    background-color: #E7E7EB;
    color:#000;
  }
  &.margin-right {
    margin-right: 10px;
  }
`