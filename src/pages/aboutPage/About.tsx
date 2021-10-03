import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";
import { Button, Image } from "semantic-ui-react";
import styles from "./About.module.css";
import headshot from "../../images/headshot.jpg";
import Navbar from "../../components/Navbar/Navbar";
import { useHistory } from "react-router-dom";


export const About = () => {
  const history = useHistory();
  return (
    <div className={styles.aboutBackground}>
       <Navbar children={["about", "login", "register"]} />
      <div className={styles.aboutHorizontal}>
        <div className={styles.aboutLeftContainer}>
        <div className={styles.aboutTextDiv}>
            <div className={styles.aboutTextBox}>
            <div className={styles.center}>
       <Image className={styles.imageHolder} src={headshot} alt="Team Headshot" />
       </div>
            <h2 className={styles.aboutH2}></h2>
            "Here at UTS, we form all our assignments using LINK to ensure students are sorted into groups fairly to ensure students have equal opportunities."
          <h2 className={styles.aboutH2}>Mantis Jones</h2>
          Head Academic of UTS
            </div>
            </div>
        </div>
        <div className={styles.aboutRightContainer}>
        <div className={styles.aboutTextDiv2}>
          <p className={styles.aboutUs}> ABOUT US </p>
          <p className = {styles.aboutLabel}> Create Groups Instantly </p>
            <div className={styles.aboutTextBox}>
            LINK can be used by any member of staff to set assignments for students and automatically assign them into groups
            for the semester, removing the challenges which may come with needing to assign students into groups. When a student
            registers to LINK they can let us know of their preferences and skills which are taken into account when generating groups
            to ensure that all skill sets are distributed fairly among groups.
            </div>
            <div className={styles.aboutBtnDiv}>
              <Button
                onClick={() => history.push("/register")}
                style={{ backgroundColor: "#884AED", color: "white", position: "inherit" }}
                circular
              >
                Get Started
              </Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
