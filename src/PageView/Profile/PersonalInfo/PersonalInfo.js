import React from 'react'

export default function PersonalInfo() {
    return (
        <div className="PersonalInfo">
            <div className="personalInfo-content">
                <span>weight</span>
                <span className="text-bold">50kg</span>
            </div>
            <div className="personalInfo-content">
                <span>height</span>
                <span className="text-bold">160 cm</span>
            </div>
            <div className="personalInfo-content">
                <span>bmi</span>
                <span className="text-bold">19.5</span>
            </div>
            <div className="personalInfo-content">
                <span>sex</span>
                <span className="text-bold">F</span>
            </div>
        </div>
    )
}
