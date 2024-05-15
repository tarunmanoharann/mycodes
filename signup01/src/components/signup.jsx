import React from 'react';
import '../assets/signup.css';
import logo from '../assets/logo.jpg';
import googleicon from '../assets/googleicon.png';
import mailicon from '../assets/mailicon.png';

const Signup = () => {
  return (
    <div className="main-container">
      <div className="container-01">
        <img src={logo} alt="Lo60 Logo" className="background" />
      </div>
      <div className="container-02">
        <div className="content">
          <div className='title-container'>
            <h2 className="logo">To<span className="logoAccent">GO</span></h2>
            <p className="description">Journey to a million miles from here!</p>
          </div>

          <div className="signupOptions">
            <div>
              <h2 className='signup-title'>Sign up</h2>
              <p className='description'>Choose a sign up method</p>
            </div>

           
            <button className="googleButton">
              <img src={googleicon} alt="Google Icon" className="googleIcon" />
              Sign up with Google
            </button>

            <button className="emailButton">
              <img src={mailicon} alt="Mail Icon" className="emailIcon" />
              Sign up with Email
            </button>

          
            <p className="loginLink">Already a user? <a href="#">Log in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
