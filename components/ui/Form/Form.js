import React, { useState } from "react";
import ListResult from "../ListResult/ListResult";
import { Container, FormContainer } from "./FormStyles";

const Form = ({ isVisible, setVisible, getWeatherFunction }) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSearchByText = (e) => {
    e.preventDefault();

    if (city.trim() === "" && country.trim() === "") return;

    getWeatherFunction(city.trim(), country.trim());
    setVisible();
    setCity("");
    setCountry("");
  };
  return (
    <Container isVisible={isVisible}>
      <div className="button-container">
        <button type="button" className="close-button" onClick={setVisible}>
          <img src="/img/close.svg" alt="close button" />
        </button>
      </div>
      <FormContainer onSubmit={handleSearchByText}>
        <input
          type="text"
          placeholder="search city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="search country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input type="submit" value="Search" className="form-button" />
      </FormContainer>
      <ListResult setVisible={setVisible} />
    </Container>
  );
};

export default Form;
