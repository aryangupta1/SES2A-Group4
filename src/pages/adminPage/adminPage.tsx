import { useFormControl } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import AssignmentCard from "../../components/AssignmentCard/AssignmentCard";
import { FormComponent } from "../../components/formComponent/form";
import { Preferences } from "../../components/Preferences/preferences";

const AdminPage = () => {
  const [email] = useState(sessionStorage.getItem("Email"));
  const [numberOfGroups, setGroupNumbers] = useState(10); // Not sure if this works but create state to get and set logins when user types their information
  const [maxSizeOfGroup, setMaxSizeOfGroup] = useState(6);
  const [assignmentName, setAssignmentName] = useState("");
  //const [studentPreferences, setPreferences] = useState<JSX.Element[]>();
  // const [studentSkills, setSkills] = useState<JSX.Element[]>();
  const [assignmentList, setAssignmentList] = useState<string[]>();

  const getAssignments = async () => {
    // fetch skills from backend & render them into form
    const assignments = await fetch(`http://localhost:8000/assignmentsAdmin?email=${email}`);
    let listOfAssignments = await assignments.json();
    setAssignmentList(listOfAssignments);
  };
  // Only makes one request
  useEffect(() => {
    // this runs on page load
    getAssignments();
  }, []);

  function refreshPage() {
    window.location.reload();
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const createAssignment = await fetch("http://localhost:8000/assignments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          numberOfGroups,
          maxSizeOfGroup,
          assignmentName,
          //studentPreferences, when preferences/skills are fixed, uncomment these
          //studentSkills,
        }),
      });
      const response = await createAssignment.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    refreshPage();
  };

  return (
    <div>
      <div className="ui top attached menu ui centered grid">
        <h1>Welcome {email} to your admin dashboard</h1>
      </div>
      <div className="ui grid">
        <div className="eight wide column">
          <FormComponent
            onSubmit="handleSubmit"
            numberOfPreferences={3}
            numberOfSkills={3}
            submitButtonText="it works"
            requiredFields={["Assignment Name", "Number of Groups", "Max Group Size"]}
          />
        </div>
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
            <Button color="violet" type="submit"> Create! </Button>

            </div>
          </form>
        </div>
        <div className="four wide column">
          <h1>Your current assignments</h1>
          <h2>
            {assignmentList?.map((assignment) => (
              <AssignmentCard assignmentName={assignment} buttonText={"View"} isAdmin={true} />
            ))}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
