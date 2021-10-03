import "semantic-ui-css/semantic.min.css";
import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import "./form.css";

export interface IFormComponents {
  requiredFields?: string[];
  numberOfSkills?: number;
  numberOfPreferences?: number;
  submitButtonText?: string;
  onSubmit: any;
}

export const FormComponent: React.FC<IFormComponents> = ({
  requiredFields = [],
  numberOfSkills = 0,
  numberOfPreferences = 0,
  submitButtonText = "Submit",
}) => {
  const [studentPreferences, setPreferences] = useState<JSX.Element[]>();
  const [studentSkills, setSkills] = useState<JSX.Element[]>();

  const getPreferences = async () => {
    // fetch preferences from backend & render them into form
    const studentPreferences = await fetch("http://localhost:8000/preferences");
    let prefs = await studentPreferences.json();
    const prefRoles = [<option value="-">-</option>]; // initialise array with default value
    for (const [key, value] of Object.entries(prefs)) {
      // for each key and value inside object
      prefRoles.push(<option value={key}>{`${value}`}</option>); // create a tag for the form with the values
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
      skillRoles.push(<option value={key}>{`${value}`}</option>); // create a tag for the form with the values
    }
    setSkills(skillRoles);
  };
  // Only makes one request
  useEffect(() => {
    // this runs on page load
    getPreferences();
    getSkills();
  }, []);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    // paramater takes in form data
    e.preventDefault(); // prevents page reload on submit
    const formData = new FormData(e.target as HTMLFormElement); // parse form data
    const formInputs : any = {};

    console.log(requiredFields);
    if (requiredFields) {
      for (let i = 0; i < requiredFields.length; i++) {
        const fieldLabel = requiredFields[i];
        // Object.defineProperty(formInputs, fieldLabel, {
        //   value: formData.get(fieldLabel),
        // });
        formInputs[`cust${fieldLabel}`] = formData.get(fieldLabel); // creates new key pair in obj, e,g cust1: "Assignment1"
      }
    }
    if (numberOfPreferences > 0) {
      for (let i = 0; i < numberOfPreferences; i++) {
        const prefLabel: string = `pref${i}`;
        // Object.defineProperty(formInputs, prefLabel, {
        //   value: formData.get(prefLabel),
        // });
        formInputs[`${prefLabel}`] = formData.get(prefLabel); // creates new key pair in obj, e,g cust1: "Assignment1"

      }
    }

    if (numberOfSkills > 0) {
      for (let i = 0; i < numberOfSkills; i++) {
        const skillLabel: string = `skill${i}`;
        // Object.defineProperty(formInputs, skillLabel, {
        //   value: formData.get(skillLabel),
        // });
        formInputs[`${skillLabel}`] = formData.get(skillLabel); // creates new key pair in obj, e,g cust1: "Assignment1"

      }
    }
    for (const [, value] of Object.entries(formInputs)) {
      if (value === "-") console.log("Please fill in all the options!");
    }

    console.log(formInputs);
  };

  return (
    <div className="ui grid">
      <div>
        <form className="preferencesForm" onSubmit={(e) => submitForm(e)}>
          <div className="formWrapper">
            <div className="form-input">
            {requiredFields.length > 0 &&
              requiredFields.map((field) => (
                <div>
                  <p>{field}</p> 
                  <input className="input" name={field} />
                </div>
              ))}
            </div>
          <div className="preferencesForm">
          <h3>Preferences</h3>
            {numberOfPreferences > 0 &&
              Array.from(Array.from({ length: numberOfPreferences }, (_, i) => i)).map((preference) => (
                <div>
                  <p> {"Preference " + preference} </p>
                  <select id={"pref" + preference} name={"pref" + preference}> {studentPreferences} </select>
                </div>
              ))}
              <h3>Skills</h3>
            {numberOfSkills > 0 &&
              Array.from(Array.from({ length: numberOfSkills }, (_, i) => i)).map((skill) => (
                <div>
                  <p> {"Skill " + skill} </p>
                  <select id={"skill" + skill} name={"skill" + skill}> {studentSkills} </select>
                </div>
              ))}
          </div>
          </div>
          <Button color="violet" type="submit">
            {submitButtonText}
          </Button>
        </form>
      </div>
    </div>
  );
};
