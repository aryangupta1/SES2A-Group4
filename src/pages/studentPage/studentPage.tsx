import React, { useState, useEffect } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./studentPage.css";
import Search from "../../components/Search/Search";
import AssignmentCard from "../../components/AssignmentCard/AssignmentCard";

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
      <h1>Welcome {email} to your student dashboard</h1>
      <input onChange={(e) => setSearch(e.target.value)} />
      <div className="assignment-container">
        <div className="assignment-grid">
          {assignmentList
            ?.filter((assignment) => assignment["assignmentName"].toLowerCase().includes(search.toLowerCase()))
            .map((assignment) => (
              <AssignmentCard assignmentName={assignment["assignmentName"]} buttonText={"View"} isAdmin={true} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
