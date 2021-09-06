import React, { useState } from "react";

const AdminPage = () => {
    const [email] = useState(sessionStorage.getItem('Email'));
    return(
        <h1>Welcome {email} to your admin dashboard</h1>
    )
}

export default AdminPage;