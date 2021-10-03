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
    const formInputs = {};

    if (requiredFields) {
      for (let field in requiredFields) {
        const fieldLabel = field;
        Object.defineProperty(formInputs, fieldLabel, {
          value: formData.get(fieldLabel),
        });
      }
    }
    if (numberOfPreferences > 0) {
      for (let index = 0; index < numberOfPreferences; index++) {
        const prefLabel: string = "pref" + (index + 1).toString();
        Object.defineProperty(formInputs, prefLabel, {
          value: formData.get(prefLabel),
        });
      }
    }

    if (numberOfSkills > 0) {
      for (let index = 0; index < numberOfSkills; index++) {
        const skillLabel: string = "skill" + (index + 1).toString();
        Object.defineProperty(formInputs, skillLabel, {
          value: formData.get(skillLabel),
        });
      }
    }
    for (const [, value] of Object.entries(formInputs)) {
      if (value === "-") console.log("Please fill in all the options!");
    }
  };

  return (
    <div className="ui grid">
      <div>
        <form className="preferencesForm" onSubmit={(e) => submitForm(e)}>
          {requiredFields.length > 0 &&
            requiredFields.map((field) => (
              <div className="form-input">
                <label>{field}</label>
                <input className="input" name={field} />
              </div>
            ))}
          <div className="preferencesFormDiv">
            {numberOfPreferences > 0 && <h3 className="topText">Preferences</h3>}
            {numberOfPreferences > 0 &&
              Array.from(Array.from({ length: numberOfPreferences }, (_, i) => i + 1)).map((preference) => (
                <label>
                  {"Preference " + preference}
                  <select id={"pref" + preference} name={"pref" + preference}>
                    {studentPreferences}
                  </select>
                </label>
              ))}
            {numberOfSkills > 0 && <h3 className="topText">Skills</h3>}
            {numberOfSkills > 0 &&
              Array.from(Array.from({ length: numberOfSkills }, (_, i) => i + 1)).map((skill) => (
                <label>
                  {"Skill " + skill}
                  <select id={"pref" + skill} name={"pref" + skill}>
                    {studentSkills}
                  </select>
                </label>
              ))}
          </div>
          <Button color="violet" type="submit">
            {submitButtonText}
          </Button>
        </form>
      </div>
    </div>
  );
};
