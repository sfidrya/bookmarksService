import  React, { useState } from 'react'; 
import SearchBar from './SearchElement'; 
import MakeList from './MakeList';
import { Bookmark, getBookmarks } from './bookmarks';


export default function BookmarksList() {
  const itemsArray = getBookmarks();  
  const [items, setItems] = useState(itemsArray); 
  const [filter, setFilter] = useState(false);
  const [filterBy, setFilterBy] = useState("title");
  const [searchText, setSearchText] = useState(""); 
  
  function filterFunction(value: Bookmark) {
    if (filterBy !== "title" && filterBy !== "tags" && filterBy !== "link") {
      return
    }
    let propertyToCheck = value[filterBy]; 
    let result = false; 
    if (filterBy === "tags") {
      for (let i = 0; i < propertyToCheck.length; i++) {
        if (propertyToCheck[i].toLowerCase().includes(searchText)) {
          result = true; 
          break; 
        }
      }
    } else {
      if (! (typeof propertyToCheck === "string")) {
        return result
      }
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

  const handleSearchTextChange = (text: string) => {
    setSearchText(text); 
    if (text !== "") {
      if (!filter) {
        setFilter(true); 
      }
      
    } else {
      if(filter) {
        setFilter(false); 
      }
    }
  }

  return ( 
    <>
      <SearchBar 
        selectedRadioOption={filterBy} 
        searchTextValue={searchText} 
        setSelectedRadioOption={setFilterBy} 
        handleSearchTextChange={handleSearchTextChange}
       />
      <MakeList 
        itemsArray={filter ? Array.prototype.filter.call(items, filterFunction) : items} 
        updateList={updateItems} />
    </>
  )
}