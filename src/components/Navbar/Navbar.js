import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import Logo from "../../images/two-small-connected-chains-svgrepo-com.svg";
import "./Navbar.css";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  return (
    <div className="navHorizontal">
      <div className="navLeftContainer" onClick={() => history.push("/")}>
        <img style={{ height: "50px" }} src={Logo} />
        <h1 className="logo">LINK</h1>
      </div>
      <div className="navRightContainer">
        <Button.Group>
          <Button onClick={() => history.push("/about")}>About</Button> {/*done like this to keep styles*/}
          <Button onClick={() => history.push("/login")}>Login</Button>
          <Button onClick={() => history.push("/create-account")}>Register</Button>
        </Button.Group>
      </div>
    </div>
  );
};

export default Navbar;
