import React, { useEffect, useState } from "react";
import { Preferences } from "../../components/Preferences/preferences";

const AdminPage = () => {
  const [owner] = useState(sessionStorage.getItem("Email"));
  const [numberOfGroups, setGroupNumbers] = useState(10); // Not sure if this works but create state to get and set logins when user types their information
  const [maxSizeOfGroup, setMaxSizeOfGroup] = useState(6);
  const [assignmentName, setAssignmentName] = useState("");
  const [studentPreferences, setPreferences] = useState<JSX.Element[]>();
  const [studentSkills, setSkills] = useState<JSX.Element[]>();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const getCurrentAssignments = await fetch("http://localhost:8000/:owner/admin-page", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          owner,
        }),
      });

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
      console.log(error);
    }
  };

  return (
    <div>
      <div className="ui top attached menu ui centered grid">
        <h1>Welcome {owner} to your admin dashboard</h1>
      </div>
      <div className="ui grid">
        <div className="four wide column">
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
            <Preferences />
          </form>
        </div>
        <div className="four wide column"></div>
        <div className="four wide column"></div>
        <div className="four wide column">
          <h1>Your current assignments</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
