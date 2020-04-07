import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './NearMeGyms.css';

export default function NearMeGyms() {

  let [location, setLocation] = useState('');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      setLocation({
        lat: coords.latitude,
        lng: coords.longitude
      })
    })
  }, [location])

  return (
    <div className="NearMeGyms">
      <div className="containerOne">
        <div className="map containerOne-content">
          <LoadScript 
            id='load-script'
            googleMapsApiKey="AIzaSyDJafHKT_k97cPZ826in74GF-yIV_ww7Hk"
          >
            <GoogleMap 
              id='map'
              zoom={13}
              center={location || {lat: 51.5007, lng: -0.1246}}
              mapContainerClassName='map'
            />
          </LoadScript>
        </div>
        
        <div className="list containerOne-content">
          <h3 className="listTitle">List of Gyms</h3>
          <ul className="listContent">
            <li className="listContent-item">gym A</li>
            <li className="listContent-item">gym B</li>
            <li className="listContent-item">gym C</li>
            <li className="listContent-item">gym D</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
