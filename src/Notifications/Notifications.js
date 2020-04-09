import React, { useState } from 'react';
import './Notifications.css';

export default function Notifications() {
    let [count, setCount] = useState(0);

    const increment = () => {
        if(count === 5) {
            alert('5 achieved');
            setCount(0)
        } else {
            setCount(count + 1)
        } 
    }

    return (
        <div className="Notifications">
            Notifications
            <h1>{count}</h1>
            <button onClick={increment}>
                Increment
            </button>
        </div>
    );
}
