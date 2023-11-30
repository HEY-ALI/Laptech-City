import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/MapComponent.css';

const MapComponent = () => {
  const [markerPosition, setMarkerPosition] = useState([28.433699, 77.320791]);

  const handleMarkerDragEnd = (event) => {
    const newPosition = event.latlng;
    setMarkerPosition([newPosition.lat, newPosition.lng]);
  };

  return (
    <MapContainer center={markerPosition} zoom={14}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={markerPosition}
        draggable
        onDragEnd={handleMarkerDragEnd}
      >
        <Popup>
          Marker Position: {markerPosition.join(', ')}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
