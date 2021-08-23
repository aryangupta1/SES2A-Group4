import React, { Fragment } from "react";
import { Button, Checkbox, Form, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import TeamImage from "../../images/teamwork-1.svg";
import "./Login.css";

const LoginForm = () => {
  return (
    <div>
      <Image src={Logo} className="logo" />

      <Form>
        <Form.Field>
          <label>Username</label>
          <input className="input" placeholder="Kenny123" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input className="input" />
        </Form.Field>
        <Button class="button" type="submit">
          Submit
        </Button>
      </Form>

      <div className="line">
        <div className="devicer"></div>
        <div>
          <p>Or</p>
        </div>
        <div className="devicer"></div>
      </div>

      <div>
        <h3>If you don't have and account?</h3>
        <Link to="/create-account">
          <Button class="createButton" type="submit">
            Create Account
          </Button>
        </Link>
      </div>
    </div>
  );
};

const PageAnimation = () => {
  return (
    <div className="container">
      <h2 className="title">Welcome to Link</h2>
      <Image className="img" src={TeamImage} alt="Teamwork" />
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
