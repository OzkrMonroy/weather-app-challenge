import React from "react";
import { ListItem } from "./Styles";

const ListResult = ({ setVisible, previousSearches, getWeatherFunction }) => {

  const handleSearchFromList = city => {
    getWeatherFunction(city);
    setVisible();
  };
  return (
    <ul>
      {previousSearches.map((previousSearch, index) => (
        <ListItem onClick={() => handleSearchFromList(previousSearch)} key={index}>
          {previousSearch}
        </ListItem>
      ))}
    </ul>
  );
};
export default ListResult;
