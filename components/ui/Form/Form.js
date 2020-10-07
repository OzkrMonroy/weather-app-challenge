import React from "react";
import ListResult from "../ListResult/ListResult";
import { Container, FormContainer } from "./FormStyles";

const Form = ({ isVisible, setVisible }) => {

  const handleSearchByText = e => {
    e.preventDefault()
    setVisible()
  }
  return (
    <Container isVisible={isVisible}>
      <div className="button-container">
        <button type="button" className="close-button" onClick={setVisible}>
          <img src="/img/close.svg" alt="close button" />
        </button>
      </div>
      <FormContainer onSubmit={handleSearchByText}>
        <div className="search-input-container">
          <img src="/img/search.svg" alt="search input" />
          <input type="text" placeholder="search location" />
        </div>
        <input type="submit" value="Search" className="form-button" />
      </FormContainer>
      <ListResult setVisible={setVisible}/>
    </Container>
  );
};

export default Form;
