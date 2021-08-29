import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import Logo from "../../images/two-small-connected-chains-svgrepo-com.svg";
import "./Navbar.css";
import { useHistory } from "react-router-dom";

export interface INavBarProps {
  children: string[];
}

const Navbar: React.FC<INavBarProps> = ({ children }) => {
  const history = useHistory();
  return (
    <div className="navHorizontal">
      <div className="navLeftContainer" onClick={() => history.push("/")}>
        <img style={{ height: "50px" }} src={Logo} />
        <h1 className="logo">LINK</h1>
      </div>
      <div className="navRightContainer">
        <Button.Group>
          {children.map((buttonName) => (
            <Button onClick={() => history.push(`/${buttonName}`)}>{buttonName}</Button>
          ))}
        </Button.Group>
      </div>
    </div>
  );
};
export default Navbar;
