import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import styles from "./Home.module.css";
import teamImage from "../../images/team-image.svg";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();

  return (
    <div className={styles.background}>
      <Navbar children={["about", "login", "register", "logout"]} />
      <div className={styles.horizontal}>
        <div className={styles.leftContainer}>
          <h2 className={styles.h2}>
            Making Group Work <span className="easy">Easy</span>
          </h2>
          <h3 className={styles.h3}>We streamline the group making process</h3>
          <Button
            style={{ backgroundColor: "#884AED", color: "white", position: "inherit" }}
            onClick={() => history.push("/login")}
          >
            Get Started
          </Button>
        </div>
        <div className={styles.rightContainer}>
          <img src={teamImage} />
        </div>
      </div>
    </div>
  );
};
