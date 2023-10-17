import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Details} from './Details';

export const Login = (props) => {
  const [username, setusername] = useState('');
  const [pass, setPass] = useState('');
  const submitSignup=(event)=> {
    event.preventDefault();
    window.location.href = 'Details.jsx';
}
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  }

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">User name</label>
        <input value={username} onChange={(e) => setusername(e.target.value)} type="text" placeholder="User name" id="username" name="username" />
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        
        <button class="button" onClick="submitSignup()">Signup</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
        Don't have an account? Register here.
      </button>
    </div>
  );
  
}
