import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export function UserDataProvider(props) {
    const [user,setUser] = useState([{name:'John Doe', url: 'idk'}]);
    
    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
}
