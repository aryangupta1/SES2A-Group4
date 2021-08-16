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
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import Box from "@material-ui/core/Box";

//import HomeIcon from "@material-ui/icons/Home"; Using material-ui

export const Home = () => {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [wrongUserPass, setWrongUserPass] = useState(false);

  const onUserChange = (val: any) => {
    setUsername(val.target.value);
    console.log(val.target.value);
  };

  const onPasswordChange = (val: any) => {
    setPassword(val.target.value);
    console.log(val.target.value);
  };

  const beginSignUp = () => {
    setSignUp(true);
  };

  const endSignup = () => {
    setSignUp(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openWrongUserPass = () => {
    setWrongUserPass(true);
  };
  const closeWrongUserPass = () => {
    setWrongUserPass(false);
  };

  const onClickLogin = () => {
    console.log("You submitted a password");
  };

  return (
    <div className="center">
      <div>
        <h1>Welcome to The Automatic Study Groups Arrangement System</h1>
        <h4>Powered by UTS. CHange</h4>

        <TextField
          id="username"
          name="username"
          label="Username"
          error={wrongUserPass}
          onChange={onUserChange}
          //helperText="Incorrect username or password"
        />

        <div>
          <TextField
            id="password-input"
            label="Password"
            type="password"
            error={wrongUserPass}
            onChange={onPasswordChange}
          />
        </div>

        <Box m={1}>
          <Button onClick={onClickLogin} type="submit" variant="contained" color="primary">
            Student Login
          </Button>
        </Box>

        <Box m={1}>
          <Button type="submit" variant="contained" color="secondary" onClick={onClickLogin}>
            Admin Login
          </Button>
        </Box>

        <Link href="#" onClick={beginSignUp} color="primary">
          {"Create an account"}
        </Link>
      </div>
      {/* <Dialog open={signUp} onClose={endSignup} aria-labelledby="form-dialog-title">
        <DialogTitle id="Create an account">Hi...</DialogTitle>
        <DialogContent>
          <DialogContentText>Let's create an account. Are you a student or admin?</DialogContentText>
          <Box m={1}>
            <Button type="submit" variant="contained" color="primary" className="centered" onClick={closeModal}>
              Student
            </Button>
          </Box>
          <Box m={1}>
            <Button type="submit" variant="contained" color="secondary" className="admin centered">
              Admin
            </Button>
          </Box>
        </DialogContent>
      </Dialog> */}

      <Dialog open={signUp} onClose={endSignup} aria-labelledby="form-dialog-title">
        <DialogTitle id="sign up">Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter your details below</DialogContentText>
          <TextField autoFocus margin="dense" id="email" label="Email Address" type="email" fullWidth />
          <TextField autoFocus margin="dense" id="password" label="Password" type="password" fullWidth />
          <TextField autoFocus margin="dense" id="password2" label="Repeat Password" type="password" fullWidth />
          <Box m={1}></Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={endSignup} color="primary" type="submit" variant="contained">
            Sign Up As Student
          </Button>
          <Button onClick={endSignup} color="secondary" type="submit" variant="contained">
            Sign Up As Admin
          </Button>
          <Button onClick={endSignup} type="submit" variant="contained">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
