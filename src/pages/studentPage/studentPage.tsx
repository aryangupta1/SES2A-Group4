import React, { useState, useEffect } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./studentPage.css";
import Search from "../../components/Search/Search";
import AssignmentCard from "../../components/AssignmentCard/AssignmentCard";
import styles from "./StudentPage.module.css";

const StudentPage = () => {
  const [email] = useState(sessionStorage.getItem("Email"));
  const [search, setSearch] = useState("");
  const [assignmentList, setAssignmentList] = useState<any[]>();

  const getAssignments = async () => {
    // fetch skills from backend & render them into form
    const assignments = await fetch(`http://localhost:8000/assignments`);
    let listOfAssignments = await assignments.json();
    setAssignmentList(listOfAssignments);
    console.log("Assignments", listOfAssignments);
  };

  useEffect(() => {
    //fetches assignments similar to admin page, on initial load
    getAssignments();
  }, []);

  return (
    <div className="studentContainer">
      <Sidebar />
      <div className="contentContainer">
        <h1 style={{ marginTop: "20px" }}>Welcome {email} to your student dashboard</h1>
        <div className="searchContainer">
          <div>
            <div className="searchHeading">Find Assignment</div>
            <div className="searchSubheading">
              Here, you can edit your details, create a new assignment, or view your existing assignments!
            </div>
            <input
              placeholder="Search Here!"
              style={{ paddingLeft: "15px" }}
              className="searchInput"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="assignmentContainer">
          <div className="assignmentGrid">
            {assignmentList
              ?.filter((assignment) => assignment["assignmentName"].toLowerCase().includes(search.toLowerCase()))
              .map((assignment) => (
                <AssignmentCard assignmentName={assignment["assignmentName"]} buttonText={"View"} isAdmin={true} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
