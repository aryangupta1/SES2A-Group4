import "semantic-ui-css/semantic.min.css";
import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import "./Preferences.css";
import { useHistory } from "react-router-dom";

export const Preferences = () => {
  const history = useHistory();
  //Preferences to render on screen
  const [studentPreferences, setPreferences] = useState<JSX.Element[]>();
  const [studentSkills, setSkills] = useState<JSX.Element[]>();

  const getPreferences = async () => {
    // fetch preferences from backend & render them into form
    const studentPreferences = await fetch("http://localhost:8000/preferences");
    let prefs = await studentPreferences.json();
    const prefRoles = [<option value="-">-</option>]; // initialise array with default value
    for (const [key, value] of Object.entries(prefs)) {
      // for each key and value inside object
      prefRoles.push(<option key={key}>{`${value}`}</option>); // create a tag for the form with the values
    }
    setPreferences(prefRoles);
  };
  const getSkills = async () => {
    // fetch skills from backend & render them into form
    const studentSkills = await fetch("http://localhost:8000/skills");
    let skills = await studentSkills.json();
    const skillRoles = [<option value="-">-</option>]; // initialise array with default value
    for (const [key, value] of Object.entries(skills)) {
      // for each key and value inside object
      skillRoles.push(<option key={key}>{`${value}`}</option>); // create a tag for the form with the values
    }
    setSkills(skillRoles);
  };
  // Only makes one request
  useEffect(() => {
    // this runs on page load
    getPreferences();
    getSkills();
  }, []);

  const submitForm = async(e: React.FormEvent<HTMLFormElement>) => {
    // paramater takes in form data
    e.preventDefault(); // prevents page reload on submit
    const formData = new FormData(e.target as HTMLFormElement); // parse form data
    const prefData = {
      // create an object with
      pref1: formData.get("pref1"),
      pref2: formData.get("pref2"),
      role1: formData.get("role1"),
      role2: formData.get("role2"),
    };
    console.log(prefData);
    const email = sessionStorage.getItem('Email');
    const submitRoles = await fetch(`http://localhost:8000/students/${email}/roles`, {
      method:"PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify([prefData.role1, prefData.role2])
    });
    const submitSkills = await fetch(`http://localhost:8000/students/${email}/skills`, {
      method:"PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify([prefData.pref1, prefData.pref2])
    });    
    if(submitRoles.ok && submitSkills.ok){
      history.push("/student-page");
    }
    else{
      window.location.reload();
    }
    for (const [, value] of Object.entries(prefData)) {
      if (value === "-") console.log("Please fill in all the options!");
    }
  };

  return (
    <div className="ui grid">
      <div className="preferencesFormDiv">
        <form className="preferencesForm" onSubmit={(e) => submitForm(e)}>
          <h3 className="topText">Roles</h3>
          <label>
            Role Preference 1
            <select id="role1" name="role1">
              {studentPreferences}
            </select>
          </label>
          <label>
            Role Preference 2
            <select id="role2" name="role2">
              {studentPreferences}
            </select>
          </label>
          <h3 className="topText">Skills</h3>
          <label>
            Skill Preference 1
            <select id="pref1" name="pref1">
              {studentSkills}
            </select>
          </label>
          <label>
            Skill Preference 2
            <select id="pref2" name="pref2">
              {studentSkills}
            </select>
          </label>
          <Button color="violet" type="submit">
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};
