import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/homeView/Home";
import { Register } from "./pages/registrationView/Register";
import { About } from "./pages/aboutPage/About";
import Login from "./pages/loginPage/LoginPage";
import StudentPage from "./pages/studentPage/studentPage";
import { Preferences } from "./pages/Preferences/Preferences";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/student-page" component={StudentPage} />
          <Route path="/Register" component={Register} />
          <Route path="/preferences" component={Preferences} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
