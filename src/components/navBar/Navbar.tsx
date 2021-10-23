import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import Logo from "../../images/logo.png";
import styles from "./Navbar.module.css";
import { useHistory } from "react-router-dom";

export interface INavBarProps {
  children: string[];
}

export const Navbar: React.FC<INavBarProps> = ({ children }) => {
  const history = useHistory();
  return (
    <div className={styles.navHorizontal}>
      <div className={styles.navLeftContainer} onClick={() => history.push("/")}>
        <img style={{ height: "50px" }} src={Logo} />
        <h1 className={styles.logo}>LINK</h1>
      </div>
      <div className={styles.navRightContainer}>
        <Button.Group>
          <Button
            style={{ position: "inherit", color: "black", borderRadius: "20px 0px 0px 20px" }}
            onClick={() => history.push(`/about`)}
          >
            About
          </Button>
          <Button
            style={{ position: "inherit", color: "black" }}
            className={styles.nav}
            onClick={() => history.push(`/register`)}
          >
            Register
          </Button>
          <Button style={{ position: "inherit", color: "black" }} onClick={() => history.push(`/login`)}>
            Login
          </Button>
          <Button
            style={{ position: "inherit", color: "black", borderRadius: "0px 20px 20px 0px" }}
            lassName={styles.nav}
            onClick={() => history.push(`/`)}
          >
            Sign Out
          </Button>
        </Button.Group>
      </div>
    </div>
  );
};
export default Navbar;
