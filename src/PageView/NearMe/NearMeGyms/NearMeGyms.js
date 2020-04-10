import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import './NearMeGyms.css';
import InfoWindows from './InfoWindows/InfoWindows'
import Switch from 'react-switch';

export default function NearMeGyms() {
  const [gymsData, setGymsData] = useState([]);
  const [location, setLocation] = useState({ lat: 51.5007, lng: -0.1246 });
  const [markerId, setMarkerId] = useState('')
  const [markerQuery, setMarkerQuery] = useState({gyms: true, trainers: false})
  useEffect(() => {
    let successPosition = (position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    }
    let errorHandle = () => setLocation({ lat: 51.5007, lng: -0.1246 });
    navigator.geolocation.getCurrentPosition(successPosition, errorHandle);
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://discover.search.hereapi.com/v1/discover?at=${location.lat},${location.lng}&q=gym&limit=15&apiKey=${process.env.REACT_APP_HERE_API}`
      );
      const result = await response.json();
      setGymsData(result.items);
    })();
  }, [location]);

  return (
    <div className="NearMeGyms">
      <div className="containerOne">
        <div className="map containerOne-content">
          <LoadScript id="load-script" googleMapsApiKey={process.env.REACT_APP_GOOGLE_API}>
            <GoogleMap
              id="gmap"
              zoom={13}
              center={location}
              mapContainerClassName="map"
            >
              { markerQuery.gyms ?
                (gymsData &&
                  gymsData.map((place) => (
                    <Marker
                      key={place.id}
                      position={place.position}
                      onClick={() => setMarkerId(place.id)}>
                        {
                          markerId === place.id ? <InfoWindows place={place} /> : ''
                        }                                         
                      </Marker>
                  ))) :
                ''
              }
            </GoogleMap>
          </LoadScript>
        </div>
        <div className="switch-buttons containerOne-content">
          <label>
            Show gyms nearby
            <Switch 
              onChange={() => setMarkerQuery({gyms: !markerQuery.gyms, trainers: markerQuery.trainers})} 
              checked={markerQuery.gyms}
              uncheckedIcon={false}
              checkedIcon={false}
              height={20}
              width={48}
              onColor='#07a807'
              handleDiameter={25}
              boxShadow="1px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="-1px 1px 1px 10px rgba(0, 0, 0, 0.2)"
            />
          </label>
          <label>
            Show personal trainers nearby
            <Switch 
              onChange={() => setMarkerQuery({gyms: markerQuery.gyms, trainers: !markerQuery.trainers})} 
              checked={markerQuery.trainers}
              uncheckedIcon={false}
              checkedIcon={false}
              height={20}
              width={48}
              onColor='#07a807'
              handleDiameter={25}
              boxShadow="1px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="-1px 1px 1px 10px rgba(0, 0, 0, 0.2)"
            />
          </label>
        </div>
        <div className="list containerOne-content">
          <h3 className="listTitle">List of Gyms</h3>
          <ul className="listContent">
            {
              markerQuery.gyms ?
                (gymsData &&
                  gymsData.map((place) => (
                    <li key={place.id+place.title} className="listContent-item">{place.title}</li>
                  ))
                ) : ''
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
