import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Read } from './components/read';
import { Create } from './components/create';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
          <br />

          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/read' component={Read} exact />
            <Route path='/create' component={Create} exact />
          </Switch>

        </div>
      </Router>
    );
  }
}
export default App;
