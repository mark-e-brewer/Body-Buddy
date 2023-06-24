/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { faHand } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '80vh',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h1 className="signing-page-logo">Body Buddy</h1>
      <h4 className="signing-page-moto">Your Body's Best Buddy</h4>
      <div>
        <img className="signin-logo-pic" src="https://i.ibb.co/3MKRQHK/logo-Brown.png" alt="logo" />
        <p className="signin-text">Sign in</p>
        <button type="button" size="lg" className="copy-btn sign-in-btn" onClick={signIn}>
          <FontAwesomeIcon className="signin-hand" icon={faHand} />
        </button>
      </div>
    </div>
  );
}

export default Signin;
