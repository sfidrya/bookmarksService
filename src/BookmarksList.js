import  React, { useState } from 'react'; 
import SearchBar from './SearchElement'; 
import MakeList from './MakeList';
import { getBookmarks } from './bookmarks';


export default function BookmarksList() {
  const itemsInitial = JSON.parse(getBookmarks()); 
  const [items, setItems] = useState(itemsInitial); 
  /*useEffect(
    () => {*setItemsJSON(getBookmarks())}, 
    []
  ) */
  const updateItems = () => {
    setItems(JSON.parse(getBookmarks()))
  }

  const handleSearch = (e)  => {
    e.preventDefault(); 
    console.log('handleSearch')

  }
  return ( 
    <>
      <SearchBar handleSearchSubmit={handleSearch} />
      <MakeList itemsObj={items} updateList={updateItems} />
    </>
  )
}