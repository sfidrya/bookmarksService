import  React, { useState } from 'react'; 
import { IconButton, Link, List, ListItem, ListItemSecondaryAction,  ListItemText } from '@material-ui/core'; 
import  DeleteIcon  from '@material-ui/icons/Delete';
import { deleteBookmark } from './bookmarks'; 


function MakeListItem (id, name, link, tags, handleClick, handleDelete) {
  const tagsString = Array.prototype.join.call(tags, ', '); 
  const linkRegExp = /https?:\/\//; 
  if (!linkRegExp.test(link)) {
    link = String.prototype.concat.call('https://', link)
  }
  
  return (
    <ListItem  key={id} divider={true} onClick={(e) => {handleClick(e, id)}}>
      <ListItemText 
        primary = {name}
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

export default function MakeList({itemsArray, updateList}) {
  const handleClick = (e, id) => {
    window.location.href = `/editbookmark/${id}`; 
  };
  const handleDelete = (e, id) => {
    deleteBookmark(id); 
    updateList(); 
  };
  const listItems = itemsArray.map(item => {
    return MakeListItem(item.id, item.name, item.link, item.tags,handleClick, handleDelete)
  })
  return (
    <List>
      {listItems}
    </List>
  )
}

