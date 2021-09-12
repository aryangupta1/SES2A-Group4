import React, { useState } from "react";
import teamImage from "../../images/teamwork-1.svg";
import "./Register.css";
import { Button, Radio, Form, Grid } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const PageAnimation = () => {
  return (
    <div className="image-container">
      <h1 className="title">Come Join Us!</h1>
      <Image className="img" src={teamImage} alt="Team Work" />
    </div>
  );
};

const FormView = () => {
  const history = useHistory();
  const [registerInfo, setRegister] = useState({email: "", password:""});
  const handleSubmit = async(e: React.SyntheticEvent) => {
  e.preventDefault();
  setRegister({email:"", password:""});
  try {
    //Check if admin or student
    const isAdmin: boolean = registerInfo.email.includes("@link.com.au");
    let user = (isAdmin) ? 'Admin' : 'Student';
    let url = (isAdmin) ? 'http://localhost:8000/auth/register/admin':'http://localhost:8000/auth/register';
    const register = await fetch(url, {
    method:"POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(registerInfo)
  });
  const response = await register.json();
  if(!response.token){
    console.log(response);
  }
  else{
    sessionStorage.setItem('JWT', response["token"]);
    sessionStorage.setItem('Email', registerInfo.email);
    let nextPage = (user === "Admin")? '/admin-page': '/preferences';
    history.push(nextPage);
  }
  } catch (error) {
    console.error(error);
  }
  }
  return (
    <div className="rightContainer">
      <Form class="ui form" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="h2">Create your Profile</h2>
        <div></div>
        <Form.Field>
          <label>Email</label>
          <input placeholder="e.g. johnsmith@gmail.com" onChange={(e) => setRegister({...registerInfo, email:e.target.value})}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" />
        </Form.Field>
        <Form.Field>
          <label>Re-enter Password</label>
          <input type="password" onChange={(e) => setRegister({...registerInfo, password:e.target.value})}/>
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
