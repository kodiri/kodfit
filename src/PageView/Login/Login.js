import React from 'react';
import './Login.css';
import InputBox from './InputBox/InputBox';

export default function Login() {
    return (
        <div className="Login">
            <div className="logo">
                Logo
            </div>
            <main className="container">
                <div className="inputBox">
                    <InputBox type="text" placeholder="Username" />
                    <InputBox type="password" placeholder="Password" />
                </div>
                <div className="loginButtons">
                    <button className="signInButton"> Sign In</button>
                    <button className="signUpButton"> Sign Up</button>
                </div>
            </main>
        </div>
    )
}
