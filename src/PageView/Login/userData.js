import React, { useState, createContext } from 'react';

export const UserContext = createContext(props);

export function userDataProvider() {
    const [user,setUser] = useState([]);
    
    return (
        <UserContext.Provider>
            {props.childeren}
        </UserContext.Provider>
    );
}
