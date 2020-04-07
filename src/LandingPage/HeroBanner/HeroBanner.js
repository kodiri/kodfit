import React from 'react';
import './HeroBanner.css';

export default function HeroBanner(props) {
    return (
        <div className="HeroBanner">
            <div className="hero-overlay text-center">
                <h1>{props.title}</h1>
                <button class="btn btn-transparent rounded-capsule">
                    {props.buttonLabel}
                </button>
            </div>
            <img 
                src={props.image} 
                alt={props.imageAlt} 
                className="hero-image overlay"
            />
        </div>
    );
}
