import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/homeView/Home";
import { Register } from "./pages/registrationView/Register";
import { About } from "./pages/aboutPage/About";
import Login from "./pages/loginPage/LoginPage";
import StudentPage from "./pages/studentPage/studentPage";
import { Preferences } from "./pages/Preferences/Preferences";
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import AdminPage from "./pages/adminPage/adminPage";

//In future need to create route checks specific for admin users
const requireJWT = (to: any, from: any, next: any) => {
  if(to.meta.auth){
    const doesJWTExist: Boolean = (sessionStorage.getItem('JWT')) ? true: false;
    if(doesJWTExist){
      next();
    }
    next.redirect('/login')
  }
  else{
    next();
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <GuardProvider guards={[requireJWT]}>
        <Switch>
          <GuardedRoute path="/" component={Home} exact />
          <GuardedRoute path="/about" component={About} />
          <GuardedRoute path="/login" component={Login} />
          <GuardedRoute path="/student-page" component={StudentPage} meta={{ auth: true }}/>
          <GuardedRoute path="/admin-page" component={AdminPage} meta={{ auth: true }}/>
          <GuardedRoute path="/Register" component={Register}/>
          <GuardedRoute path="/preferences" component={Preferences} meta={{ auth: true }}/>
        </Switch>
        </GuardProvider>
      </BrowserRouter>
    );
  }
}

export default App;
