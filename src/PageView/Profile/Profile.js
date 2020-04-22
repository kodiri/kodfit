import React from 'react';
import './Profile.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';

export default function Profile() {

    const userName = localStorage.getItem('userName');
    const userImageUrl = localStorage.getItem('userImageUrl');

    return (
        <div className="Profile">
            <div className="container">
                <div className="container-content">
                    <div className="profileBox">
                        <div className="profileBox-photo">
                            <img src={userImageUrl} alt={userName} />
                        </div>
                        <h2 className="profileBox-userInfo">{userName}</h2>
                        <PersonalInfo />
                    </div>
                </div>
                <div className="separator-center" />
                <div className="container-content">
                    <div className="goal">
                        <h4>GOAL</h4>
                        <div className="goal-weight">
                            <span>weight</span>
                            <span>48 kg</span>
                        </div>
                        <div className="goal-weight">
                            <span>bmi</span>
                            <span>18.7</span>
                        </div>
                    </div>
                </div>
                {/* <div className="container-content">
                    <h3>Daily Workout Duration</h3>
                    <div className="durationGraph">
                        Here will be graph
                    </div>
                </div> */}
            </div>
        </div>
    )
}
