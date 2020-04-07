import React from 'react';
import './NearMeGyms.css';

export default function NearMeGyms() {
    return (
        <div className="NearMeGyms">
            <div className="containerOne">
                <div className="map containerOne-content">
                    this will be map
                </div>
                <div className="list containerOne-content">
                    <h3 className="listTitle">List of Gyms</h3>
                    <ul className="listContent">
                        <li className="listContent-item">gym A</li>
                        <li className="listContent-item">gym B</li>
                        <li className="listContent-item">gym C</li>
                        <li className="listContent-item">gym D</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
