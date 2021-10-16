import { useFormControl } from "@material-ui/core";
/* import axios from "axios"; */
import React, { useEffect, useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import { forEachChild } from "typescript";
import AssignmentCard from "../../components/AssignmentCard/AssignmentCard";
import { FormComponent } from "../../components/formComponent/form";
import Navbar from "../../components/NavBar/Navbar";
import { Preferences } from "../../components/Preferences/preferences";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import styles from "./adminPage.module.css";

const AdminPage = () => {
  const [email] = useState(sessionStorage.getItem("Email"));
  const [assignmentList, setAssignmentList] = useState<string[]>();
  const [adminName, setAdminName] = useState<any>();
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = useState("");

  const getAssignments = async () => {
    // fetch skills from backend & render them into form
    const assignments = await fetch(`http://localhost:8000/assignmentsAdmin?email=${email}`);
    let listOfAssignments = await assignments.json();
    console.log(listOfAssignments);
    setAssignmentList(listOfAssignments);
    console.log(assignmentList);
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
    <div className={styles.background}>
      <div className={styles.header}>
      <Navbar children={["about", "login", "register", "logout"]} />
        <div className={styles.heading}>Find Assignment</div>
        <div className={styles.subheading}>Welcome {email}</div>
        <div className={styles.subheading}>
          Here, you can edit your details, create a new assignment, or view your existing assignments!
        </div>
        <input className={styles.input} onChange={(e) => setSearch(e.target.value)} />
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={
            <Button style={{ backgroundColor: "black", color: "white", position: "inherit" }} circular>
              Add Assignment
            </Button>
          }
        >
          <FormComponent
            onSubmit="handleSubmit"
            numberOfPreferences={3}
            numberOfSkills={3}
            submitButtonText="CREATE!"
            submitType="assignment"
            requiredFields={["Assignment Name", "Number of Groups", "Max Group Size"]}
          />
        </Modal>
      </div>
      <div className={styles.assignmentContainer}>
        <div className={styles.assignmentGrid}>
          {assignmentList
            ?.filter((assignment) => assignment.toLowerCase().includes(search.toLowerCase()))
            .map((assignment) => (
              <AssignmentCard assignmentName={assignment} buttonText={"View"} isAdmin={true} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
