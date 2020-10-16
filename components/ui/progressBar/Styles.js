import styled from "@emotion/styled";

export const ProgressBarContainer = styled.div`
  & .percentages-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & p {
      color: #e7e7eb;
      font-size: 12px;
      font-weight: 700;
    }
  }
  
  & .progress-bar {
    height: 8px;
    background-color: #e7e7eb;
    border-radius: 10px;
    position: relative;

    &::after {
      content: "";
      display: block;
      background: #ffec65;
      width: ${(props) => props.percentage};
      height: 100%;
      border-radius: 6px;
      transition: width 1s ease;
    }
    &::before {
      content: "%";
      color: #e7e7eb;
      font-size: 12px;
      font-weight: 700;
      position: absolute;
      top: 10px;
      right: 0;
    }
  }
`;
