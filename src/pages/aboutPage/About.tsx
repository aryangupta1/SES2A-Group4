import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import styles from "./About.module.css";
import teamImage from "../../images/team-image.svg";
/* import Navbar from "../../components/Navbar/Navbar"; */
import { useHistory } from "react-router-dom";

export const About = () => {
  const history = useHistory();
  return (
    <div className={styles.aboutBackground}>
      {/* <Navbar children={["about", "login", "register"]} /> */}
      <div className={styles.aboutHorizontal}>
        <div className={styles.aboutLeftContainer}>
          <h2 className={styles.aboutH2}>About Us</h2>
          <h3 className={styles.aboutH3}>asdasdasdasdasdasdasd</h3>
        </div>
        <div className={styles.aboutRightContainer}>
          <div className={styles.aboutTextDiv}>
            <div className={styles.aboutTextBox}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className={styles.aboutBtnDiv}>
              <Button
                onClick={() => history.push("/login")}
                style={{ backgroundColor: "#884AED", color: "white", position: "inherit" }}
                circular
              >
                Login
              </Button>
              <div style={{ fontWeight: "bold", fontSize: "18px" }}>or</div>
              <Button
                onClick={() => history.push("/register")}
                style={{ backgroundColor: "#884AED", color: "white", position: "inherit" }}
                circular
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
