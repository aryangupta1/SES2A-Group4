import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import "./findAssignment.css";
import { useHistory } from "react-router-dom";


function findAssignment()  {
    return (

        <div className="findAssignmentForm">
            <h2 className="title">Find Assignment</h2>
            <p>Here is your dashboard! Here you can find jobs and Assignments</p>
            <input className="findAssignmentInput"></input>

        </div>

     
    )

}
export default findAssignment;