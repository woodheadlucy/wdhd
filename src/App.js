import './App.css';
import About from '../src/pages/about';
import Community from './pages/community';
import Contact from './pages/contact';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        Lucy
      </header>
      <Router>
        <Link className="menu-item" to="/about">About</Link>
        <Link className="menu-item" to="/community">In the community</Link>
        <Link className="menu-item" to="/contact">Contact</Link>


      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/community">
        <Community />
        </Route>
        <Route path="/contact">
        <Contact />
        </Route>
      </Switch>

      </Router>
     



   
    </div>
  );
}

export default App;
