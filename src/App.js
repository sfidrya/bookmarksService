import { Container } from '@material-ui/core'
//import { makeStyles } from '@material-ui/core/styles';
import AddBookmark from './AddBookmark'
import MakeList from './MakeList'


function App() {
  return (
    <Container>
      <header>
        My Bookmarks
      </header>
      <AddBookmark />
      <MakeList 
        items={[
          {id: 1, name: "First bookmark", link: "www.google.com"}, 
          {id: 2, name: "Second bookmark", link: "https://"}, 
          {id:3, name: 3, link: "www"}
          ]} 
        />
    </Container>
  );
}

export default App;
