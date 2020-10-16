import React from "react";
import { ListItem } from "./Styles";

const ListResult = ({ setVisible, previousSearches, getWeatherFunction }) => {

  const handleSearchFromList = (city, country) => {
    getWeatherFunction(city, country);
    setVisible();
  };
  return (
    <ul>
      {previousSearches.map((previousSearch, index) => (
        <ListItem onClick={() => handleSearchFromList(previousSearch.city, previousSearch.country)} key={index}>
          {previousSearch.city}, {previousSearch.country}
        </ListItem>
      ))}
    </ul>
  );
};
export default ListResult;
