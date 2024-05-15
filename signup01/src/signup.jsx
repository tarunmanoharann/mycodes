import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../css/signup.css';
import logo from '../assets/logo.jpg';
import googleicon from '../assets/googleicon.png';
import mailicon from '../assets/mailicon.png';

import { auth, provider } from './config'; 

import { signInWithPopup } from "firebase/auth";
import Home from './home';

const Signup = () => {
  const [value, setValue] = useState('');
  const [redirect, setRedirect] = useState(false); 

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []); 

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
        setRedirect(true);
      })
      .catch((error) => {
        console.error('Sign-in error:', error.message);
      });
  };

  return (
    <div className="main-container">
      <div className="container-01">
        <img src={logo} alt="Lo60 Logo" className="background" />
      </div>
      <div className="container-02">
        <div className="content">
          <div className='title-container'>
            <h2 className="logo">Lo<span className="logoAccent">GO</span></h2>
            <p className="description">Journey to a million miles from here!</p>
          </div>

          <div className="signupOptions">
            <div>
              <h2 className='signup-title'>Sign up</h2>
              <p className='description'>Choose a sign up method</p>
            </div>

            {redirect && <Navigate to="/home" replace={true} />}
            <button onClick={handleClick} className="googleButton">
              <img src={googleicon} alt="Google Icon" className="googleIcon" />
              Sign up with Google
            </button>

            <Link to="/home" className="emailButton">
              <img src={mailicon} alt="Mail Icon" className="emailIcon" />
              Sign up with Email
            </Link>

            <p className="loginLink">Already a user? <a href="#">Log in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
