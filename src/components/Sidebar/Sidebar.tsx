import './Sidebar.css'
import logo from '../../images/logo.svg'
import assignmentImg from '../../images/assignments.svg'
import 'semantic-ui-css/semantic.min.css'
import React, { useEffect, useState } from "react";

export const Sidebar = () => {
    const [assignmentList, setAssignmentList] = useState<any>();
    const [email] = useState(sessionStorage.getItem('Email'));

    const getAssignments = async () => {
        // fetch skills from backend & render them into form
        const assignments = await fetch(`http://localhost:8000/assignmentsAdmin?email=${email}`);
        let listOfAssignments = await assignments.json();

        let assignmentArr = []; // init array
        for (let i = 0; i < listOfAssignments.length; i++) { // for each assignment, create tags for listing in TSX
            let assignmentName = listOfAssignments[i];
            assignmentArr.push(
                <div className="assignmentListing">
                    <a href={`/assignment?${assignmentName}`} >
                        <h5>{'>'} &nbsp; {`${assignmentName}`}</h5>
                    </a>
                    {/* <br/> */}
                </div>
            )
        }
        setAssignmentList(assignmentArr);

      };

    useEffect(() => {getAssignments()}, []);        //this runs on page load

    return (
        <div>
        <div className="wrapper">
        <div className="assignments">
            <img alt='logo'className='logo' src={logo} />
            
                <div className='nametag'><h3 style={{marginTop: "25%"}}>JA</h3></div>

                <h5><img alt='assignmentImg' className='assignmentImg' src={assignmentImg} />Assignments :</h5> 
                <br/>
                {assignmentList}

            
            </div>
            <a href='/logout' className='logout'>LOGOUT</a>      
        </div>
        </div>
    )
}

/* -------------------------------PLACEHOLDERS-------------------------------
                <a href="/dashboard" className="assignmentListing">
                    <h5>{'>'} &nbsp; Assignment 1</h5>
                </a>
                <br/>
                <a href="/dashboard" className="assignmentListing">
                    <h5>{'>'} &nbsp; Assignment 2</h5>
                </a>
                <br/>

                <a href="/dashboard" className="assignmentListing">
                    <h5>{'>'} &nbsp; Assignment 3</h5>
                </a>
                <br/>

                <a href="/dashboard" className="assignmentListing">
                    <h5>{'>'} &nbsp; Assignment 4</h5>
                </a>
                <br/>

                <a href="/dashboard" className="assignmentListing">
                    <h5>{'>'} &nbsp; Assignment 5</h5>
                </a>
                <br/>

                <a href="/dashboard" className="assignmentListing">
                    <h5>{'>'} &nbsp; Assignment 6</h5>
                </a> */