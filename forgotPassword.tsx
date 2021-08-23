import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Link,
    TextField,
  } from "@material-ui/core";
import "./Home.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import Box from "@material-ui/core/Box";



const changePassword = () => {
    console.log("You have sucesssfully changed your password");
  };

  export const forgotPassword = () => {

    return (
    <div className="center">
        <h1>Change your password here</h1>

        <TextField
          id="new-password"
          name="new-password"
          label="Enter New Password"
        />

        <TextField
          id="new-password"
          name="confirm-password"
          label="Confirm New Password"
        />

        <Box m={1}>
          <Button onClick={changePassword} type="submit" variant="contained" color="primary"> 
            UPDATE PASSWORD
          </Button>
        </Box>


    </div>

    );

}
