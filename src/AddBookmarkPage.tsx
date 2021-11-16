import { Button, TextField } from '@material-ui/core'
import { useCallback, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react-transition-group/node_modules/@types/react';
import { addBookmark, editBookmark, getBookmarkById } from './bookmarks'

interface AddOrEditBookmarkParams {
  id: string
}

export default function AddOrEditBookmarkPage() {
  let { id } = useParams<AddOrEditBookmarkParams>();
  const edit = Boolean(id); 
  const bookmark = edit ? getBookmarkById(id) : null; 
  const [formState, setFormState] = useState({
    bookmarkTitle: edit ? bookmark?.title : '', 
    bookmarkUrl: edit ? bookmark?.link : '', 
    bookmarkTags: edit ? bookmark?.tags?.join(', ') : ''
  }); 

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; 
    const name = e.target.name; 
    setFormState(prevFormState => ({...prevFormState, [name]: value}))
  }, []);

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    let bookmarkTitle: string = ''
    if (formState.bookmarkTitle !== undefined) {
      bookmarkTitle = formState.bookmarkTitle
    }
    let bookmarkUrl: string = ""
    if (formState.bookmarkUrl !== undefined) {
      bookmarkUrl = formState.bookmarkUrl
    }
    let bookmarkTags: string = ""
    if (formState.bookmarkTags !== undefined) {
      bookmarkTags = formState.bookmarkTags
    }
    if (edit) {
      console.log('edit bookmark'); 
      editBookmark(id, bookmarkTitle, bookmarkUrl, bookmarkTags); 
    } else {
      console.log('add bookmark');
      addBookmark(bookmarkTitle, bookmarkUrl, bookmarkTags); 
    }
      window.location.href = "/";

  };

  return(
    <form onSubmit={handleSubmit}>
      <br />
      <TextField
        name="bookmarkTitle"
        label="Type bookmark name here"
        value={formState.bookmarkTitle}
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
      <Button variant="contained" color="primary" >
        <Link to="/bookmarkslist" className="linkButton">Cancel</Link>
      </Button>
      <Button type="submit" color="primary" variant="contained">
        {edit ? "Save Bookmark" : "Add Bookmark"}
      </Button>
    </form>
  )
}