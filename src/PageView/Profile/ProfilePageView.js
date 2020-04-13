import React, { useContext } from 'react';
import Profile from './Profile';
import { UserDataProvider } from '../Login/userData';
import Login from '../Login/Login';

export default function ProfilePageView() {
    return (
        <UserDataProvider>
            <Profile />
            <Login />
        </UserDataProvider>

    )
}
