import 'semantic-ui-css/semantic.min.css'
import React, { useState } from "react";
import { Button } from 'semantic-ui-react'
import "./Home.css";
import teamImage from "../../images/team-image.svg"
import Navbar from '../../components/navBar/Navbar';

// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

export const Home = () => {
//   const history = useHistory();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [signUp, setSignUp] = useState(false);
//   const [wrongUserPass, setWrongUserPass] = useState(false);

//   const onUserChange = (val: any) => {
//     setUsername(val.target.value);
//     console.log(val.target.value);
//   };

//   const onPasswordChange = (val: any) => {
//     setPassword(val.target.value);
//     console.log(val.target.value);
//   };

//   const beginSignUp = () => {
//     setSignUp(true);
//   };

//   const endSignup = () => {
//     setSignUp(false);
//   };

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const openWrongUserPass = () => {
//     setWrongUserPass(true);
//   };
//   const closeWrongUserPass = () => {
//     setWrongUserPass(false);
//   };

//   const onClickLogin = () => {
//     console.log("You submitted a password");
//   };
  return (
    <div className="background">
      <Navbar children = {} />
      <div className="horizontal">
        <div className="leftContainer">
          <h2 className="h2">Making Group Work <span className="easy">Easy</span></h2>
          <h3 className="h3">We streamline the group making process</h3>
          <Button style={{backgroundColor: "#884AED", color: "white"}} circular>Get Started</Button>
        </div>
        <div className="rightContainer">
          <img src={teamImage} />
        </div>
      </div>
    </div>
  )
}
