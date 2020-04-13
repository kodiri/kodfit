import React, { useState, createContext } from 'react';
import Profile from '../Profile/Profile';

export const UserContext = createContext();

export function UserDataProvider(props) {
    const [user,setUser] = useState([]);
    
    return (
        <UserContext.Provider value={'hey'}>
            {props.children}
        </UserContext.Provider>
    );
}
