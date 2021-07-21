function addBookmark(name, link, tags) {
  if (name === "") {
    name = "Untitled"; 
  }
  const tagsArray = tags.split(/[,\s]+/);       
  console.log('tagsArray'); 
  console.log(tagsArray); 
  let idCounter = localStorage.getItem('idCounter'); 
  if(!idCounter) {
    idCounter = 1; 
  } else {
    ++idCounter; 
  }
  let bookmarksJSON = localStorage.getItem('bookmarks');
  if(!bookmarksJSON) {
    bookmarksJSON = '{}';
  }
  const bookmarks = JSON.parse(bookmarksJSON); 
  bookmarks[idCounter] = {id: idCounter, name: name, link: link, tags: tagsArray}; 
  const newBookmarksJSON = JSON.stringify(bookmarks); 
  localStorage.setItem('bookmarks', newBookmarksJSON); 
  localStorage.setItem('idCounter', idCounter)
}

function editBookmark(id, name, link, tags) {
  if (name === "") {
    name = "Untitled"; 
  }
  const tagsArray = tags.split(/[,\s]+/);       
  console.log('tagsArray'); 
  console.log(tagsArray);

  let bookmarksJSON = localStorage.getItem('bookmarks');
  if(!bookmarksJSON) {
    bookmarksJSON = '{}';
  }
  const bookmarks = JSON.parse(bookmarksJSON); 
  bookmarks[id] = {id: id, name: name, link: link, tags: tagsArray}; 
  const newBookmarksJSON = JSON.stringify(bookmarks); 
  localStorage.setItem('bookmarks', newBookmarksJSON); 
}

function getBookmarks() {
  let bookmarksJSON = localStorage.getItem('bookmarks'); 
  if (!bookmarksJSON) {
    bookmarksJSON = '{}';
  }
  return bookmarksJSON; 
}

function getBookmarkById(id) {
  const bookmarks = JSON.parse(getBookmarks()); 
  return bookmarks[id]; 
}

function deleteBookmark(id) {
  let bookmarksJSON =  localStorage.getItem('bookmarks'); 
  if (!bookmarksJSON) {
    console.log('error: no bookmarks'); 
    return; 
  }
  const bookmarks = JSON.parse(bookmarksJSON); 
  delete bookmarks[id]; 
  bookmarksJSON = JSON.stringify(bookmarks); 
  localStorage.setItem('bookmarks', bookmarksJSON); 
}

exports.addBookmark = addBookmark; 
exports.deleteBookmark = deleteBookmark; 
exports.editBookmark = editBookmark; 
exports.getBookmarks = getBookmarks; 
exports.getBookmarkById = getBookmarkById; 