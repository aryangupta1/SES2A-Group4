import React, { useState } from "react";
import teamImage from "../../images/register.png";
import "./Register.css";
import { Button, Radio, Form, Grid } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const PageAnimation = () => {
  return (
    <div className="Rectangle">
      <div className="padding"/>
      <h1 className="topText">Come Join Us!</h1>
      <Image className="illustration" src={teamImage} alt="Team Work" />
    </div>
  );
};

const FormView = () => {
  const history = useHistory();
  const [registerInfo, setRegister] = useState({ email: "", password: "" , passwordConfirm:""});
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setRegister({ email: "", password: "" , passwordConfirm: ""});
    try {
      //Check if passwords match
      if(registerInfo.password !== registerInfo.passwordConfirm){
        //Use this message for error UI
        alert('Passwords do not match');
        //Refresh page  
        window.location.reload();
      }
      else{
        //Check if admin or student
        const isAdmin: boolean = registerInfo.email.includes("@link.com.au");
        let user = isAdmin ? "Admin" : "Student";
        let url = isAdmin ? "http://localhost:8000/auth/register/admin" : "http://localhost:8000/auth/register";
        const register = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(registerInfo),
        });
        const response = await register.json();
        if (!response.token) {
          console.log(response);
          alert(response);
          //Refresh page  
          window.location.reload();
        } else {
          sessionStorage.setItem("User", user);
          sessionStorage.setItem("JWT", response["token"]);
          sessionStorage.setItem("Email", registerInfo.email);
          let nextPage = user === "Admin" ? "/admin-page" : "/preferences";
          history.push(nextPage);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="rightContainer">
      <form className="registration-form" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="h2">Create your Profile</h2>
        <Form.Field style={{ display: "flex", flexDirection: "column" }} >
          <label className="label">Email</label>
          <input
            className="input"
            placeholder="e.g. johnsmith@gmail.com"
            onChange={(e) => setRegister({ ...registerInfo, email: e.target.value })}
          />
        </Form.Field>
        <Form.Field style={{ display: "flex", flexDirection: "column" }}>
          <label className="label">Password</label>
          <input className="input" type="password"             
          onChange={(e) => setRegister({ ...registerInfo, password: e.target.value })}
          />
        </Form.Field>
        <Form.Field style={{ display: "flex", flexDirection: "column" }}>
          <label className="label">Re-enter Password</label>
          <input
            className="input"
            type="password"
            onChange={(e) => setRegister({ ...registerInfo, passwordConfirm: e.target.value })}
          />
        </Form.Field>
        <div style={{ alignSelf: "center", marginTop: "30px" }}>
          <Button
            style={{ backgroundColor: "rgba(136, 74, 237, 0.8)", color: "rgb(255, 255, 255)", borderRadius: "30px" }}
            type="continue"
          >
            Continue
          </Button>
        </div>

        {/*         <Button type="continue">
          Continue
        </Button> */}
      </form>
    </div>
  );
};

export const Register = () => {
  return (
    <div className="flex-wrapper">
      <PageAnimation />
      <div className="form">
      <FormView />
      </div>
    </div>
  );
};
