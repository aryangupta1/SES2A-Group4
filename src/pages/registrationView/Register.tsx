import React from "react";
import teamImage from "../../images/teamwork-1.svg";
import "./Register.css";
import { Button, Radio, Form, Grid } from "semantic-ui-react";
import { Image } from "semantic-ui-react";

const PageAnimation = () => {
  return (
    <div className="image-container">
      <h1 className="title">Come Join Us!</h1>
      <Image className="img" src={teamImage} alt="Team Work" />
    </div>
  );
};

const FormView = () => {
  return (
    <div className="rightContainer">
      <Form class="ui form">
        <h2 className="h2">Create your Profile</h2>
        <div></div>
        <Form.Field>
          <label>Email</label>
          <input placeholder="e.g. johnsmith@gmail.com" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" />
        </Form.Field>
        <Form.Field>
          <label>Re-enter Password</label>
          <input type="password" />
        </Form.Field>
        <Button style={{ backgroundColor: "rgba(136, 74, 237, 0.8)", color: "rgb(255, 255, 255)" }} type="continue">
          Continue
        </Button>
      </Form>
    </div>
  );
};

export const Register = () => {
  return (
    <div className="registration-page">
      <PageAnimation />
      <FormView />
    </div>
  );
};
