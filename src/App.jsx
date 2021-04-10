import './App.css';
import About from './pages/about';
import Community from './pages/community';
import Contact from './pages/contact';
import Home from './pages/home'
import React from 'react';
import lucy from './stairs-sitting.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




const App = () => {

  return (
    <div className="App">

      <Router>
      <header className="App-header">
        <Link className="header" to="/">Lucy Woodhead</Link>
      </header>
        <div className="menu-wrapper">
          <Link className="menu-item" to="/about">About</Link>
          <Link className="menu-item" to="/community">In the community</Link>
          <Link className="menu-item" to="/contact">Contact</Link>
        </div>


      <Switch>
        <Route default exact path="/"><Home />

        </Route>
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
