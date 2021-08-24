import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/loginPage/LoginPage";
import { Home } from "./pages/homeView/Home";
import LoginPage from "./pages/loginPage/LoginPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login">
            <LoginPage />
          </Route>

          {/* <Route path="/contact" component={""} />
             <Route component={Error} />  */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
