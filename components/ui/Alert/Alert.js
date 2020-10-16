import React from 'react'
import AlertConainer from './Styles';

const Alert = ({isShowed, message}) => {
  return (
    <AlertConainer show={isShowed}>
      <p>{message}</p>
    </AlertConainer>
  );
}
 
export default Alert;