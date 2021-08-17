import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Login.css";

const LoginForm = () => {
  return (
    <>
      <Form>
        <Form.Field>
          <label>Username</label>
          <input className="input" placeholder="Kenny123" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input className="input" placeholder="Last Name" />
        </Form.Field>
        <Button class="button" type="submit">
          Submit
        </Button>
      </Form>

      <div className="line">
        <div class="devicer"></div>
        <div>
          <p>Or</p>
        </div>
        <div class="devicer"></div>
      </div>

      <div>
        <h3>If you don't have and account?</h3>
        <Link to="/create-account">
          <Button class="button" type="submit">
            Create Account
          </Button>
        </Link>
      </div>
    </>
  );
};

const PageAnimation = () => {
  return (
    <div className="container">
      <h2 className="title">Welcome to Link</h2>
      <img className="img" src="" alt="" />
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <Route path="/login">
        <LoginForm />
        <PageAnimation />
      </Route>
    </div>
  );
};

export default Login;
