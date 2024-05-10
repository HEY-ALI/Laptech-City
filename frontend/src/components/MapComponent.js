import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/MapComponent.css';

// Custom marker icon
const customMarkerIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = () => {
  const [markerPosition, setMarkerPosition] = useState([28.433699, 77.320791]);

  const handleMarkerDragEnd = (event) => {
    const { lat, lng } = event.target.getLatLng();
    setMarkerPosition([lat, lng]);
  };

  return (
    <div className="map-container">
      <MapContainer center={markerPosition} zoom={14} className="leaflet-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={markerPosition} draggable={true} icon={customMarkerIcon} onDragEnd={handleMarkerDragEnd}>
          <Popup>
            <strong>Marker Position:</strong> <br />
            Latitude: {markerPosition[0].toFixed(6)}, <br />
            Longitude: {markerPosition[1].toFixed(6)}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
