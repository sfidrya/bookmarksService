import  React, { useState } from 'react'; 
import SearchBar from './SearchElement'; 
import MakeList from './MakeList';
import { getBookmarks } from './bookmarks';


export default function BookmarksList() {
  const itemsArray = getBookmarks();  
  const [items, setItems] = useState(itemsArray); 
  /*useEffect(
    () => {*setItemsJSON(getBookmarks())}, 
    []
  ) */
  const updateItems = () => {
    setItems(getBookmarks()); 
  }

  const handleSearch = (e)  => {
    e.preventDefault(); 
    console.log('handleSearch')

  }
  return ( 
    <>
      <SearchBar handleSearchSubmit={handleSearch} />
      <MakeList itemsArray={items} updateList={updateItems} />
    </>
  )
}