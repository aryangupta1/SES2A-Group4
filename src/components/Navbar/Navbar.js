import 'semantic-ui-css/semantic.min.css'
import React, { useState } from "react";
import { Button } from 'semantic-ui-react'
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="horizontal">
            <div className="leftContainer">
                <h1 className="logo">LINK</h1>
                </div>
            <div className="rightContainer">
                <Button.Group>
                    <Button>About</Button>
                    <Button>Login</Button>
                    <Button>Register</Button>
                </Button.Group></div>
        </div>
    );
}

export default Navbar;