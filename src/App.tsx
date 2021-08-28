import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/homeView/Home";
import { Register }  from "./pages/registrationView/Register";
import { About } from "./pages/aboutPage/About";
import Login from "./pages/loginPage/LoginPage";
import StudentPage from "./pages/studentPage/studentPage";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;