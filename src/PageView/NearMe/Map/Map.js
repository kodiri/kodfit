import React, { useState } from "react";
import "./Map.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import InfoWindows from "./InfoWindows/InfoWindows";

export default function Map({ data, location }) {
    const [markerId, setMarkerId] = useState('');
    const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <div className="Map">
        <LoadScript
          id="load-script"
          googleMapsApiKey={`${API_KEY}`}
        >
          <GoogleMap
            id="gmap"
            zoom={13}
            center={location}
            mapContainerClassName="map"
          >
            {data &&
              data.map((place) => (
                <Marker
                  key={place.id}
                  position={place.position}
                  onClick={() => setMarkerId(place.id)}
                >
                  {markerId === place.id ? <InfoWindows place={place} /> : ""}
                </Marker>
              ))}
          </GoogleMap>
        </LoadScript>
    </div>
  );
}
