import  React from 'react'; 
import { Button, IconButton, Link, List, ListItem, ListItemSecondaryAction,  ListItemText } from '@material-ui/core'; 
import  DeleteIcon  from '@material-ui/icons/Delete';
//import OpenInNewIcon from '@material-ui/icons/OpenInNew';

function MakeListItem ({id, link, name, tags = ['no_tag']}) {
  //console.log(tags); 
  const tagsString = Array.prototype.join.call(tags, ', '); 
  //console.log(tagsString); 
  const linkRegExp = /https?:\/\//; 
  console.log(linkRegExp.test(link))
  if (!linkRegExp.test(link)) {
    link = String.prototype.concat.call('https://', link)
  }
  console.log(link); 
  const handleClick = (e) => {
    console.log('pressed list item'); 
    const target = e.target; 
    console.log(target)
};
  const handleSecondaryClick = () => {console.log('нажали DELETE')};
  const handleLink = () => {console.log('alternative link click')};
  //const handleButtonClick = () => {console.log('Button clicked')}
  return (
    <ListItem  key={id} divider={true} onClick={handleClick}>
      <ListItemText 
        primary = {name}
        secondary = {
          <>
          <Link href={link} target= "_blank" rel="noopener noreferrer">{link}</Link><br/>
          Tags: {tagsString}
          </>
        }
      />
      <ListItemSecondaryAction onClick={handleSecondaryClick}>
        <IconButton>
          <DeleteIcon></DeleteIcon>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}; 

export default function MakeList(props){
  const itemsArray = props.items; 
  const listItems = itemsArray.map(item => {
    return MakeListItem(item)
  })
  return (
    <List>
      {listItems}
    </List>
  )

}

