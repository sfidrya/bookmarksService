import  React, { useState } from 'react'; 
import SearchBar from './SearchElement'; 
import MakeList from './MakeList';
import { getBookmarks } from './bookmarks';


export default function BookmarksList() {
  const itemsArray = getBookmarks();  
  const [items, setItems] = useState(itemsArray); 
  const [filter, setFilter] = useState(false);
  const [filterBy, setFilterBy] = useState("name");
  const [searchText, setSearchText] = useState(""); 
  
  function filterFunction(value) {
    console.log('FILTER FUNCTION')
    console.log(value); 
    let propertyToCheck = value[filterBy]; 
    console.log(propertyToCheck); 
    let result = false; 
    if (filterBy === "tags") {
      for (let i = 0; i < propertyToCheck.length; i++) {
        if (propertyToCheck[i].toLowerCase().includes(searchText)) {
          result = true; 
          break; 
        }
      }
    } else {
      result = propertyToCheck.toLowerCase().includes(searchText);
    }
    return result;  
  } 
  /*useEffect(
    () => {*setItemsJSON(getBookmarks())}, 
    []
  ) */
  const updateItems = () => {
    setItems(getBookmarks()); 
  }

  const handleSearch = (selectedSearchBy, searchTextValue)  => {
      if (searchTextValue !== "") {
      setFilter(true); 
      setFilterBy(selectedSearchBy === "tag" ? "tags" : selectedSearchBy); 
      setSearchText(searchTextValue.toLowerCase()); 
    } else {
      setFilter(false); 
    }
  }

  return ( 
    <>
      <SearchBar handleSearchSubmit={handleSearch} />
      <MakeList itemsArray={filter ? Array.prototype.filter.call(items, filterFunction) : items} updateList={updateItems} />
    </>
  )
}