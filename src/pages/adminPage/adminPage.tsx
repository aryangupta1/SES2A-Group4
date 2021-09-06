import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

const AdminPage = () => {
  const [owner] = useState(sessionStorage.getItem("Email"));
  const [numberOfGroups, setGroupNumbers] = useState(10); // Not sure if this works but create state to get and set logins when user types their information
  const [maxSizeOfGroup, setMaxSizeOfGroup] = useState(6);
  const [assignmentName, setAssignmentName] = useState("");
  const [studentPreferences, setPreferences] = useState<JSX.Element[]>();
  const [studentSkills, setSkills] = useState<JSX.Element[]>();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const studentPreferences = await fetch("http://localhost:8000/preferences");

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

    try {
      const createAssignment = await fetch("http://localhost:8000/assignments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          owner,
          numberOfGroups,
          maxSizeOfGroup,
          assignmentName,
          studentPreferences,
          studentSkills,
        }),
      });
      const response = await createAssignment.json();
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Welcome {owner} to your admin dashboard</h1>
      <h2>Create an assignment below!</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-input">
          <label>Assignment Name</label>
          <input className="input" onChange={(e) => setAssignmentName(e.target.value)} />
        </div>
        <div className="form-input">
          <label>Number of Groups</label>
          <input type="input" className="input" onChange={(e) => setGroupNumbers(parseInt(e.target.value))} />
        </div>
        <div className="form-input">
          <label>Max size of each group</label>
          <input className="input" onChange={(e) => setMaxSizeOfGroup(parseInt(e.target.value))} />
        </div>

        <div className="form-label">
          <button className="button" type="submit">
            Create Assignment!
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPage;
