import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CovidTotal from "./components/covidTotal";
import StateWise from "./components/stateWise";


function App() {
  return (
  
      <Router>

        <Switch>

          <Route path="/" exact>
            <CovidTotal />
          </Route>

          <Route path="/statewise" exact>
            <StateWise />
          </Route>

        </Switch>

      </Router>
    
  );
}

export default App;
