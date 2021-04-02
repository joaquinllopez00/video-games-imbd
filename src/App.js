import React, { useEffect } from "react";

import { Home } from "./pages/Home";
import { Library } from "./components/Library";
import { About } from "./components/About";
import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Router basename="https://joaquinllopez00.github.io/video-games-imbd/">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={["/game/:id"]}>
            <Home />
          </Route>
          <Route exact path="/library">
            <Library />
          </Route>
          <Route path={["/library/game/:id"]}>
            <Library />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
