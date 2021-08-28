import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/homeView/Home";
import { Register }  from "./pages/registrationView/Register";
import  { Login }  from "./pages/loginPage/LoginPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
