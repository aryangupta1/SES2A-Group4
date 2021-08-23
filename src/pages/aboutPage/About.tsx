import 'semantic-ui-css/semantic.min.css'
import React, { useState } from "react";
import { Button } from 'semantic-ui-react'
import "./About.css";
import teamImage from "../../images/team-image.svg"
import Navbar from '../../components/Navbar/Navbar';

export const About = () => {
    return (
        <div className="aboutBackground">
            <Navbar />
            <div className="aboutHorizontal">
                <div className="aboutLeftContainer">
                    <h2 className="aboutH2">About Us</h2>
                    <h3 className="aboutH3">asdasdasdasdasdasdasd</h3>
                </div>
                <div className="aboutRightContainer">
                    <div className="aboutTextDiv">
                    <div className="aboutTextBox">
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book. It has 
                        survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially 
                        unchanged. It was popularised in the 1960s with the 
                        release of Letraset sheets containing Lorem Ipsum 
                        passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of 
                        Lorem Ipsum.

                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but 
                        also the leap into electronic typesetting, remaining essentially 
                        unchanged. It was popularised in the 1960s with the release 
                        of Letraset sheets containing Lorem Ipsum passages, and 
                        more recently with desktop publishing software like Aldus 
                        PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className="aboutBtnDiv">
                    <Button style={{backgroundColor: "#884AED", color: "white"}} circular>Login</Button>
                    <div style={{fontWeight: "bold", fontSize: "18px"}} >or</div>
                    <Button style={{backgroundColor: "#884AED", color: "white"}} circular>Register</Button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
