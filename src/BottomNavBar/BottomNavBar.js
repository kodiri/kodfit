import React from 'react';
import NavBarButton from './BottomNavBarButton/BottomNavBarButton';
import './BottomNavBar.css';


export default function BottomNavBar() {
  const navLinks = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];

  return (
    <div className="BottomNavBar">
      {navLinks.map(navLink => <NavBarButton key={navLink} link={navLink} />)}
    </div>
  )
}
