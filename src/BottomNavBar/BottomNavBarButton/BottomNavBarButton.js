import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNavBarButton.css';
import { FaDumbbell } from 'react-icons/fa';


export default function BottomNavBarButton({ link }) {
  return (
    <NavLink to={`/${link}`} className="BottomNavBarButton" activeClassName='active'>
      <FaDumbbell />
      { link }
    </NavLink>
  )
}
