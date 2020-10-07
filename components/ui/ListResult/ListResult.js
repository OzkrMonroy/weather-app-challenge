import React from 'react'
import { ListItem } from './ListResultStyles';

const ListResult = ({setVisible}) => {

  const handleSearchFromList = () => {
    setVisible()
  }
  return (
    <ul>
      <ListItem onClick={handleSearchFromList}>Guatemala</ListItem>
      <ListItem onClick={handleSearchFromList}>Honduras</ListItem>
    </ul>
  );
}
 
export default ListResult;