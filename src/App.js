import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Accounts from "./containers/accounts.js";
import Balances from "./containers/balances.js";
import About from "./containers/about.js";
import Home from "./containers/home.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/account" component={Accounts} />
        <Route exact path="/balances" component={Balances} />
      </Router>
    );
  }
}

export default App;
