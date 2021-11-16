import  React from 'react'; 
import { IconButton, Link, List, ListItem, ListItemSecondaryAction,  ListItemText } from '@material-ui/core'; 
import  DeleteIcon  from '@material-ui/icons/Delete';
import { Bookmark, deleteBookmark } from './bookmarks'; 




function MakeListItem(
    id: string, 
    title: string | null, 
    link: string, 
    tags: string[] | null, 
    handleClick: (e: React.MouseEvent, id: string) => void, 
    handleDelete: (e: React.MouseEvent, id: string) => void) {
  const tagsString = Array.prototype.join.call(tags, ', '); 
  const linkRegExp = /https?:\/\//; 
  if (!linkRegExp.test(link)) {
    link = String.prototype.concat.call('https://', link)
  }
  
  return (
    <ListItem  key={id} divider={true} onClick={(e) => {handleClick(e, id)}}>
      <ListItemText 
        primary = {title}
        secondary = {
          <>
          <Link href={link} target= "_blank" rel="noopener noreferrer">{link}</Link><br/>
          Tags: {tagsString}
          </>
        }
      />
      <ListItemSecondaryAction onClick={(e) => handleDelete(e, id)}>
        <IconButton>
          <DeleteIcon></DeleteIcon>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
};

interface MakeListProps {
  itemsArray: Bookmark[], 
  updateList: () => void 

}

export default function MakeList({itemsArray, updateList}: MakeListProps) {
  const handleClick = (e: React.MouseEvent, id: string) => {
    window.location.href = `/editbookmark/${id}`; 
  };
  const handleDelete = (e: React.MouseEvent, id: string) => {
    deleteBookmark(id); 
    updateList(); 
  };
  const listItems = itemsArray.map(item => {
    return MakeListItem(item.id, item.title, item.link, item.tags,handleClick, handleDelete)
  })
  return (
    <List>
      {listItems}
    </List>
  )
}

