import React, { useState, useEffect } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./studentPage.css";
import Search from "../../components/Search/Search";
import AssignmentCard from "../../components/AssignmentCard/AssignmentCard";

const StudentPage = () => {
  const [email] = useState(sessionStorage.getItem("Email"));
  const [search, setSearch] = useState("");
  const [assignments, setAssignments] = useState<[]>();

  const getAssignments = async () => {
    // fetch skills from backend & render them into form
    const assignments = await fetch(`http://localhost:8000/assignments`);
    let listOfAssignments = await assignments.json();
    setAssignments(listOfAssignments);
    console.log(listOfAssignments);
  };

  useEffect(() => {
    //fetches assignments similar to admin page, on initial load
    getAssignments();
  }, []);

  return (
    <div className="studentContainer">
      <Sidebar />
      <h1>Welcome {email} to your student dashboard</h1>
      <Search />
      <div className="assignment-container">
        <div className="assignment-grid">
          {/*         {assignments
            ?.filter((assignment) => assignment.toLowerCase().includes(search.toLowerCase()))
            .map((assignment) => (
              <AssignmentCard assignmentName={assignment} buttonText={"View"} isAdmin={true} />
            ))}  */}
          {assignments?.map((assignment) => (
            <AssignmentCard assignmentName={assignment["assignmentName"]} buttonText={"Join"} isAdmin={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
