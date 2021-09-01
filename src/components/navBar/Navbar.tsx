import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import Logo from "../../images/two-small-connected-chains-svgrepo-com.svg";
import styles from "./Navbar.module.css";
import { useHistory } from "react-router-dom";

export interface INavBarProps {
  children: string[];
}

const Navbar: React.FC<INavBarProps> = ({ children }) => {
  const history = useHistory();
  return (
    <div className={styles.navHorizontal}>
      <div className={styles.navLeftContainer} onClick={() => history.push("/")}>
        <img style={{ height: "50px" }} src={Logo} />
        <h1 className={styles.logo}>LINK</h1>
      </div>
      <div className={styles.navRightContainer}>
        <Button.Group>
          {children.map((buttonName) => (
            <Button style={{position: "inherit"}} onClick={() => history.push(`/${buttonName}`)}>{buttonName.charAt(0).toUpperCase() + buttonName.slice(1)}</Button>
          ))}
        </Button.Group>
      </div>
    </div>
  );
};
export default Navbar;
