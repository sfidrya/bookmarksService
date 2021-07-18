import { Button, TextField } from '@material-ui/core'

export default function AddBookmark() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('add bookmark')
  }
  return(
    <form onSubmit={handleSubmit}>
      <TextField
        id="bookmarkName"
        label="Type bookmark name here"
        //defaultValue=""
        //helperText="Some important text"
        fullWidth={true}
      />
      <TextField
        required
        id="bookmarkUrl"
        label="Type URL here"
        fullWidth={true}
      />
      <TextField
        id="bookmarkTags"
        label="Type tags for your bookmark here"
        placeholder="tag1, tag2, tag3"
        fullWidth={true}
      />
      <Button type="submit" color="primary" variant="contained">
        Add Bookmark
      </Button>
    </form>
  )
}