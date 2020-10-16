import React, { useState } from "react";
import ListResult from "../ListResult/ListResult";
import { Container, Error, FormContainer } from "./FormStyles";

const Form = ({ isVisible, setVisible, getWeatherFunction }) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false)
  const [previousSearches, setPreviousSearches] = useState([]);

  const handleSearchByText = (e) => {
    e.preventDefault();

    const cityToSearch = city.trim();
    const countryToSearch = country.trim();

    if (cityToSearch === "" || countryToSearch === "") {
      setError(true);
      
      setTimeout(() => {
        setError(false);
      }, 3000);

      return
    };

    getWeatherFunction(cityToSearch, countryToSearch);
    const newPreviousSearches = [...previousSearches, { city: cityToSearch, country: countryToSearch}].reverse()
    setPreviousSearches(newPreviousSearches);

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
          placeholder="New York"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="USA"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        {error && <Error> <p>Fill out all of the fields, please.</p> </Error>}
        <input type="submit" value="Search" className="form-button" />
      </FormContainer>
      <ListResult
        setVisible={setVisible}
        previousSearches={previousSearches}
        getWeatherFunction={getWeatherFunction}
      />
    </Container>
  );
};

export default Form;
