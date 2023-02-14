import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Detail from "./views/Detail";
import Main from "./views/Main";
import Update from "./views/Update";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          exact
          path="/products/"
          render={(routeProps) => <Main {...routeProps} />}
        />
        <Route
          exact
          path="/products/:id"
          render={(routeProps) => <Detail {...routeProps} />}
        />
        <Route
          path="/products/:id/edit"
          render={(routeProps) => <Update {...routeProps} />}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
