import React, { useContext } from 'react';
import Profile from './Profile';
import { UserDataProvider } from '../Login/userData';

export default function ProfilePageView() {
    return (
        <UserDataProvider>
            <Profile />
        </UserDataProvider>

    )
}
