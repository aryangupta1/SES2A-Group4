import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/homeView/Home";
import { Register } from "./pages/registrationView/Register";
import { About } from "./pages/aboutPage/About";
import Login from "./pages/loginPage/LoginPage";
import StudentPage from "./pages/studentPage/studentPage";
import { PreferencesPage } from "./pages/PreferencesPage/PreferencesPage";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import AdminPage from "./pages/adminPage/adminPage";
import AssignmentPage from "./pages/assignmentPage/assignmentPage";
 
//In future need to create route checks specific for admin users
const requireJWT = (to: any, from: any, next: any) => {
  if (to.meta.auth) {
    const doesJWTExist: Boolean = sessionStorage.getItem("JWT") ? true : false;
    if (doesJWTExist) {
      next();
    }
    next.redirect("/login");
  } else {
    next();
  }
};
const adminOnly = (to: any, from: any, next: any) => {
  if(to.meta.auth === 'RequireAdmin'){
    const isAdmin: Boolean = (sessionStorage.getItem('User') === 'Admin');
    if(isAdmin){
      next();
    }
    next.redirect("/login");
  }
  else{
    next();
  }
}

const logout = (to: any, from: any, next: any) => {
  if(to.meta.auth === 'logout'){
    sessionStorage.removeItem('Email');
    sessionStorage.removeItem('JWT');
    next.redirect("/");
  }
  else{
    next();
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <GuardProvider guards={[requireJWT, adminOnly, logout]}>
          <Switch>
            <GuardedRoute path="/" component={Home} exact />
            <GuardedRoute path="/about" component={About} />
            <GuardedRoute path="/login" component={Login} />
            <GuardedRoute path="/student-page" component={StudentPage} meta={{ auth: true }} />
            <GuardedRoute path="/admin-page" component={AdminPage}  meta={{ auth: true && 'RequireAdmin' }}/>
            <GuardedRoute path="/Register" component={Register} />
            <GuardedRoute path="/preferences" component={PreferencesPage} meta={{ auth: true }} />
            <GuardedRoute path="/logout" meta={{auth: 'logout'}}/>
            <GuardedRoute path="/assignment" component={AssignmentPage} meta={{auth: true}}/>
          </Switch>
        </GuardProvider>
      </BrowserRouter>
    );
  }
}

export default App;
