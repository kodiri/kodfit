import React from 'react';
import './Tracker.css';

export default function Tracker() {
    return (
        <div className="Tracker">
            <h2 className="trackerTitle">Tracker</h2>
            <main className="container">
                <div className="graph container-content">
                    this will be graph
                </div>
                <div className="information cotainer-content">
                    Here will display basic info about goals,
                    weight gained, lost... etc
                </div>
            </main>
        </div>
    )
}
