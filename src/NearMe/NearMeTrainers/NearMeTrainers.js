import React from 'react'
import './NearMeTrainers.css';

export default function NearMeTrainers() {
    return (
        <div className="NearMeTrainers">
            <div className="containerOne">
                <div className="map containerOne-content">
                    this will be map
                </div>
                <div className="list containerOne-content">
                    <h3 className="listTitle">Trainer Near Me</h3>
                    <ul className="listContent">
                        <li className="containerTwo listContent-item">
                            <div className="trainerImage flex-item" />
                            <p className="trainerDescription flex-item">
                                Description of Trainer
                            </p>
                        </li>
                        <li className="containerTwo listContent-item">
                            <div className="trainerImage flex-item" />
                            <p className="trainerDescription flex-item">
                                Description of Trainer
                            </p>
                        </li>
                        <li className="containerTwo listContent-item">
                            <div className="trainerImage flex-item" />
                            <p className="trainerDescription flex-item">
                                Description of Trainer
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
