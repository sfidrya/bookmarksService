import { Button, TextField } from '@material-ui/core'
import { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom';
import { addBookmark, editBookmark, getBookmarkById } from './bookmarks'

export default function AddOrEditBookmarkPage() {
  let { id } = useParams();
  const edit = Boolean(id); 
  const bookmark = edit ? getBookmarkById(Number(id)) : null; 
  const [formState, setFormState] = useState({
    bookmarkName: edit ? bookmark.name : '', 
    bookmarkUrl: edit ? bookmark.link : '', 
    bookmarkTags: edit ? bookmark.tags.join(', ') : ''
  }); 

  const handleChange = useCallback((e) => {
    const value = e.target.value; 
    const name = e.target.name; 
    setFormState({...formState, [name]: value})
  }, [formState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      console.log('edit bookmark'); 
      editBookmark(Number(id), formState.bookmarkName, formState.bookmarkUrl, formState.bookmarkTags); 
    } else {
      console.log('add bookmark');
      addBookmark(formState.bookmarkName, formState.bookmarkUrl, formState.bookmarkTags); 
    }
      window.location.href = "/";

  };

  return(
    <form onSubmit={handleSubmit}>
      <br />
      <TextField
        name="bookmarkName"
        label="Type bookmark name here"
        value={formState.bookmarkName}
        fullWidth={true}
        onChange={handleChange}
      />
      <TextField
        required
        name="bookmarkUrl"
        label="Type URL here"
        value={formState.bookmarkUrl}
        fullWidth={true}
        onChange={handleChange}
      />
      <TextField
        name="bookmarkTags"
        label="Type tags for your bookmark here"
        value={formState.bookmarkTags}
        placeholder="tag1, tag2, tag3"
        fullWidth={true}
        onChange={handleChange}
      />
      <Button type="submit" color="primary" variant="contained">
        {edit ? "Save Bookmark" : "Add Bookmark"}
      </Button>
    </form>
  )
}