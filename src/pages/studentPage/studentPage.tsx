import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import './studentPage.css'


const StudentPage = () => {
    const [email] = useState(sessionStorage.getItem('Email'));
    return(
        <div className="studentContainer">
            <Sidebar/>
            <h1>Welcome {email} to your student dashboard</h1>
            <h3>Other Side</h3>
        </div>
    )
}

export default StudentPage;