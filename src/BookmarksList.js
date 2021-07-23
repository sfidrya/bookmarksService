import  React, { useState } from 'react'; 
import SearchBar from './SearchEl'; 
import MakeList from './MakeList';
import { getBookmarks } from './bookmarks';


export default function BookmarksList() {
  const itemsInitial = getBookmarks(); 
  const [items, setItems] = useState(itemsInitial); 
  console.log(items)
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
      <MakeList itemsString={items} updateListState={updateItems} />
    </>
  )
}