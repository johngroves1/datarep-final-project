import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DisplayAlbum } from './components/displayAlbum';
import { AddAlbum } from './components/addAlbum';
import { UpdateAlbum } from './components/updateAlbum';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">      
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/LP_Vinyl_Symbol_Icon.png" width="30" height="30"></img>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/displayAlbum">Display Albums</Nav.Link>
              <Nav.Link href="/addAlbum">Add Albums</Nav.Link>
            </Nav>
          </Navbar>
         

          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/displayAlbum' component={DisplayAlbum} exact />
            <Route path='/addAlbum' component={AddAlbum} exact />
            <Route path='/updateAlbum/:id' component={UpdateAlbum}/>
          </Switch>

        </div>
      </Router>
    );
  }
}
export default App;
