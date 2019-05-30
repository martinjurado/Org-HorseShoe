import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

// Pages
import StorePage from "./pages/storepage";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/store" component={StorePage} />
      </Switch>
    </div>
  </Router>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
