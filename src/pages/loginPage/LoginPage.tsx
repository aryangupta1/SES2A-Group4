import React from "react";
import Login from "../../components/Login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

export default LoginPage;
