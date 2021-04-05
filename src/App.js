import React, { useEffect } from "react";

import { Home } from "./pages/Home";
import { Library } from "./components/Library";
import { About } from "./components/About";
import GlobalStyles from "./components/GlobalStyles";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path={["/game/:id"]}>
          <Home />
        </Route>
        <Route exact path="/library">
          <Library />
        </Route>
        <Route exact path={["/library/game/:id"]}>
          <Library />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
