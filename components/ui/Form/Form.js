import React, { useState } from "react";
import ListResult from "../ListResult/ListResult";
import { Container, Error, FormContainer } from "./Styles";

const Form = ({ isVisible, setVisible, getWeatherFunction }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false)
  const [previousSearches, setPreviousSearches] = useState([]);

  const handleSearchByText = (e) => {
    e.preventDefault();

    const cityToSearch = city.trim();

    if (cityToSearch === "") {
      setError(true);
      
      setTimeout(() => {
        setError(false);
      }, 3000);

      return
    };

    getWeatherFunction.byName(cityToSearch);
    
    const newPreviousSearches = [...previousSearches, cityToSearch].reverse()
    setPreviousSearches(newPreviousSearches);

    setVisible();
    setCity("");
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
          placeholder="City or Country"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {error && <Error> <p>Fill out of the field, please.</p> </Error>}
        <input type="submit" value="Search" className="form-button" />
      </FormContainer>
      <ListResult
        setVisible={setVisible}
        previousSearches={previousSearches}
        getWeatherFunction={getWeatherFunction.byName}
      />
    </Container>
  );
};

export default Form;
