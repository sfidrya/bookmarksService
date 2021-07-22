import { Button, Container } from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
import './App.css'; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddOrEditBookmarkPage from './AddBookmarkPage';
import MakeList from './MakeList';


function App() {
  return (
    <Router>
    <Container>
      <header>
        My Bookmarks
      </header>
      
      <Switch>
        <Route path="/addbookmark">
          <AddOrEditBookmarkPage />
        </Route>
        <Route path="/editbookmark/:id">
          <AddOrEditBookmarkPage />
        </Route>

        <Route path="/bookmarkslist">  
        <>
          <MakeList />
          <Button variant="contained" color="primary">
            <Link to="/addbookmark" className="linkButton">Add bookmark</Link>
          </Button>
          </>
        </Route>
        <Route path="/">
        <>
          <MakeList />
          <Button variant="contained" color="primary">
            <Link to="/addbookmark" className="linkButton">Add bookmark</Link>
          </Button>
          </>
        </Route>
      </Switch>

    </Container>
    </Router>
  );
}

export default App;
