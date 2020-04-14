import React, { useState, useContext } from 'react';
import './Login.css';
import InputBox from './InputBox/InputBox';
import kodfit_logo from './../../common/images/kodfit_logo_large.svg';
import GoogleLogin from 'react-google-login';

export default function Login() {

    const responseGoogle = response => {
        localStorage.setItem('userName', response.profileObj.name);
        localStorage.setItem('userImageUrl', response.profileObj.imageUrl);
    }

    return (
        <div className="Login">
            <div className="logoBox">
                <img src={kodfit_logo} className="logo" alt="logo" />
            </div>
            <main className="container">
                <div className="inputBox">
                    <InputBox type="text" placeholder="Username" />
                    <InputBox type="password" placeholder="Password" />
                </div>
                <div className="loginButtons">
                    <button className="signInButton"> Sign In</button>
                    <p> or </p>
                    <GoogleLogin
                        clientId="848040990578-mpvcvg31e99180qb7f28rqvfm708iqp3.apps.googleusercontent.com"
                        render={renderProps => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="btn-google">
                                    Sign in with Google
                                </button>
                          )}
                          buttonText="Sign in with Google"
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={'single_host_origin'}
                          isSignedIn={true}
                        />
                </div>
            </main>
        </div>
    )
}
