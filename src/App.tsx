import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/homeView/Home";
import { About } from "./pages/aboutPage/About";
import Login from "./pages/loginPage/LoginPage";
import StudentPage from "./pages/studentPage/studentPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />

          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/student-page" component={StudentPage} />

          {/* <Route path="/contact" component={""} />
             <Route component={Error} />  */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
