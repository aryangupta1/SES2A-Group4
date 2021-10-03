import React, { useState } from "react";

const StudentPage = () => {
    const [email] = useState(sessionStorage.getItem('Email'));
    return(
        <h1>Welcome {email} to your student dashboard</h1>
    )
}

export default StudentPage;