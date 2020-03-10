import React from "react";
import "./App.css";
import Docs from "./views/Docs";
import Items from "./views/Items";
import About from "./views/About";
import MenuBar from "./components/MenuBar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuBar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/docs" />} />
          <Route exact path="/docs" component={Docs} />
          <Route exact path="/items" component={Items} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
