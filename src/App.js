import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Main from "./pages/about";


// Pages
import StorePage from "./pages/storepage";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />

        <Route exact path="/store" component={StorePage} />
      </Switch>
    </div>
  </Router>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
