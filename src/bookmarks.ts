export interface Bookmark {
  id: string
  link: string
  title: string
  tags: string[]
}

export interface Bookmarks {
  [key: string]: Bookmark
}

export function addBookmark(title: string, link: string, tags: string) {
  if (title === "") {
    title = "Untitled"; 
  }
  const tagsArray = tags.split(/[,\s]+/);       
  console.log('tagsArray'); 
  console.log(tagsArray); 
  let idCounter = Number(localStorage.getItem('idCounter')); 
  if(!idCounter) {
    idCounter = 1; 
  } else {
    ++idCounter; 
  }
  let bookmarksJSON = localStorage.getItem('bookmarks');
  if(!bookmarksJSON) {
    bookmarksJSON = '{}';
  }
  const bookmarks: Bookmark[] = JSON.parse(bookmarksJSON); 
  bookmarks[idCounter] = {id: idCounter.toString(), title: title, link: link, tags: tagsArray}; 
  const newBookmarksJSON = JSON.stringify(bookmarks); 
  localStorage.setItem('bookmarks', newBookmarksJSON); 
  localStorage.setItem('idCounter', idCounter.toString())
}

export function editBookmark(id: string, title: string, link: string, tags: string) {
  if (title === "") {
    title = "Untitled"; 
  }
  const tagsArray = tags.split(/[,\s]+/);       
  console.log('tagsArray'); 
  console.log(tagsArray);

  let bookmarksJSON = localStorage.getItem('bookmarks');
  if(!bookmarksJSON) {
    bookmarksJSON = '{}';
  }
  const bookmarks = JSON.parse(bookmarksJSON); 
  bookmarks[id] = {id: id, title: title, link: link, tags: tagsArray}; 
  const newBookmarksJSON = JSON.stringify(bookmarks); 
  localStorage.setItem('bookmarks', newBookmarksJSON); 
}

export function getBookmarks(): Bookmark[] {
  let bookmarksJSON = localStorage.getItem('bookmarks'); 
  if (!bookmarksJSON) {
    bookmarksJSON = '{}';
  }
  const bookmarksArray: Bookmark[] = Object.values(JSON.parse(bookmarksJSON)); 
  return bookmarksArray; 
}

export function getBookmarkById(id: string): Bookmark | null {
  let bookmarksJSON = localStorage.getItem('bookmarks'); 
  if (!bookmarksJSON) {
    return null
  }
  const bookmarks: Bookmarks | null = JSON.parse(bookmarksJSON); 
  if (!bookmarks?.id){
    return null
  }
  return bookmarks.id; 
}

export function deleteBookmark(id: string): void {
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

// exports.addBookmark = addBookmark; 
// exports.deleteBookmark = deleteBookmark; 
// exports.editBookmark = editBookmark; 
// exports.getBookmarks = getBookmarks; 
// exports.getBookmarkById = getBookmarkById; 