import { useFormControl } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import { forEachChild } from "typescript";
import AssignmentCard from "../../components/AssignmentCard/AssignmentCard";
import { FormComponent } from "../../components/formComponent/form";
import { Preferences } from "../../components/Preferences/preferences";

const AdminPage = () => {
  const [email] = useState(sessionStorage.getItem("Email"));
  const [assignmentList, setAssignmentList] = useState<string[]>();
  const [adminName, setAdminName] = useState<any>();

  const getAssignments = async () => {
    // fetch skills from backend & render them into form
    const assignments = await fetch(`http://localhost:8000/assignmentsAdmin?email=${email}`);
    let listOfAssignments = await assignments.json();
    setAssignmentList(listOfAssignments);
  };

  const getAdminDetailsName = async () => {
    const adminName = await fetch(`http://localhost:8000/adminDetailsName?email=${email}`);
    let admin = await adminName.json();
    setAdminName(admin);
  };
  // Only makes one request
  useEffect(() => {
    //this runs on page load
    getAdminDetailsName();
    getAssignments();
  }, []);

  return (
    <div>
      <div className="ui top attached menu ui centered grid">
        <h1>Welcome {email} to your admin dashboard</h1>
      </div>
      <div className="ui grid">
        <div className="four wide column">
          <h2>Here, you can edit your details, create a new assignment, or view your existing assignments!</h2>
        </div>
        <div className="four wide column">
          <h2>Admin Details</h2>
        </div>

        <div className="four wide column">
          <FormComponent
            onSubmit="handleSubmit"
            numberOfPreferences={3}
            numberOfSkills={3}
            submitButtonText="Create!"
            submitType="assignment"
            requiredFields={["Assignment Name", "Number of Groups", "Max Group Size"]}
          />
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
