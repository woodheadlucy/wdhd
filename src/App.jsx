import "./App.css";
import About from "./pages/about";
import Community from "./pages/community";
import Contact from "./pages/contact";
import Home from "./pages/home";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [theme, setTheme] = React.useState("light");

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Router>
          <header className="App-header">
            <Link className="header" to="/">
              Lucy Woodhead
            </Link>
            <label class="switch">
              <input onClick={toggleTheme} type="checkbox" />
              <span class="slider round"></span>
            </label>
          </header>
          <div className="menu-wrapper">
            <Link className="menu-item" to="/about">
              About
            </Link>
            <Link className="menu-item" to="/community">
              In the community
            </Link>
            <Link className="menu-item" to="/contact">
              Contact
            </Link>
          </div>

          <Switch>
            <Route default exact path="/">
              <Home />
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
    </ThemeProvider>
  );
};

export default App;
