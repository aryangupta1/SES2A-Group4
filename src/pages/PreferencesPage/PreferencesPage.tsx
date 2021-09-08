import "semantic-ui-css/semantic.min.css";
import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import "../../components/Preferences/preferences";
import finishedIllustration from "../../images/finished-illustration.svg";
import { Preferences } from "../../components/Preferences/preferences";
// import step_3 from "../../images/step-3.svg"
// import step_4 from "../../images/step-4.svg"

export const PreferencesPage = () => {
  return (
    <div className="main">
      <div className="Rectangle">
        <h3 style={{ color: "#FFFFFF" }} className="topText">
          You're nearly there!
        </h3>
        <img alt="finished-illustration" className="finishedIllustration" src={finishedIllustration} />
      </div>
      <div className="Preferences" style={{display:'flex', justifyContent:'space-around',}}>
      <Preferences />
      </div>
    </div>
  );
};

/*  Could not get these images  to render in the correct spot. Will leave for now.
    <img alt='steps_3' className='steps' src={step_3} />
    <img alt='steps_4' className='steps' src={step_4} />
*/
