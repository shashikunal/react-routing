import React, { Component, Fragment } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import HomePageComponent from "./Components/HomePageComponent/HomePageComponent";
import Login from "./Components/AuthComponent/LoginComponent";
import Register from "./Components/AuthComponent/RegisterComponent";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Router>
          <header>
            <HeaderComponent />
          </header>

          {/* routes */}
          <main className="container">
            <Route path="/" exact component={HomePageComponent} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </main>
        </Router>
      </Fragment>
    );
  }
}

export default App;
