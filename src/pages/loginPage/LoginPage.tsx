import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Login.css";
import Logo from "../../images/logo.png";
import TeamWorkImage from "../../images/teamwork-3.svg";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();
  const [logins, setLogins] = useState({ email: "", password: "" }); // Not sure if this works but create state to get and set logins when user types their information

  const handleSubmit = async(e: React.SyntheticEvent) => {
    e.preventDefault();
    setLogins({ email: "", password: "" });
    try {
      const isAdmin: boolean = logins.email.includes("@link.com.au");
      let user = (isAdmin) ? 'Admin' : 'Student';
      let url = (isAdmin) ? 'http://localhost:8000/auth/login/admin':'http://localhost:8000/auth/login/';
      const login = await fetch(url, {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(logins)
      });
      //JWT will be accessed in future when users navigate through user-logged-in only routes
      const response = await login.json();
      const email = logins.email;
      sessionStorage.setItem('Email', email);
      if(response.token){
        sessionStorage.setItem('JWT', response["token"]);
        sessionStorage.setItem('User', user);
        console.log('Successs');
        let nextPage = (user === "Admin")? '/admin-page': '/student-page';
        history.push(nextPage);
      }
      else{
        alert(response);
        //Refresh page  
        window.location.reload();
      }
    } catch (error) {
      alert(error);
      //Refresh page  
      window.location.reload();
    }
  };
  return (
    <div className="login-form">
      <div className="logo-container">
        <Image className="logo" src={Logo} alt="Link" />
      </div>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-input">
          <label>Email</label>
          <input className="input" onChange={(e) => setLogins({ ...logins, email: e.target.value })} />{" "}
          {/* connected the inputs to state */}
        </div>
        <div className="form-input">
          <label>Password</label>
          <input type="password" className="input" onChange={(e) => setLogins({ ...logins, password: e.target.value })} />{" "}
          {/* connected the inputs to state */}
        </div>
        <div className="form-label">
            <button className="button" type="submit">
              Log-in
            </button>
        </div>
      </form>

      <div className="line">
        <div className="devicer"></div>
        <div className="or">
          <p>Or</p>
        </div>
        <div className="devicer"></div>
      </div>

      <div className="create-account">
        <h3 className="no-account">Don't have an account?</h3>
        <Link to="/register">
          <button className="create-button" type="submit">
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
};

const PageAnimation = () => {
  return (
    <div className="container">
      <h2 className="title">Welcome to Link!</h2>
      <Image className="img" src={TeamWorkImage} alt="Team Work" />
    </div>
  );
};

const Login = () => {
  return (
    <div className="login-page">
      <Route path="/login">
        <PageAnimation />
        <LoginForm />
      </Route>
    </div>
  );
};

export default Login;
