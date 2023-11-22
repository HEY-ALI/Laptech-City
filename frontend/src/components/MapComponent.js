import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

import '../styles/MapComponent.css';

const MapComponent = () => {
  const [markerPosition, setMarkerPosition] = React.useState({ lat: 28.433699, lng: 77.320791 });

  const handleMarkerDragEnd = (event) => {
    setMarkerPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={markerPosition}
        zoom={14}
      >
        <Marker position={markerPosition} draggable onDragEnd={handleMarkerDragEnd} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
