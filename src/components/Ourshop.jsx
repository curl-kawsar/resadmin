'use client';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const fakeLocation = {
  lat: 40.712776,
  lng: -74.005974,
  address: '123 Fake Street, New York, NY 10001, USA',
};

export default function OurShop() {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Our Shop</h1>
      <div className='mb-6'>
        <h2 className='text-xl font-bold mb-2'>Location</h2>
        <p className='text-gray-700'>{fakeLocation.address}</p>
      </div>
      <div className='relative w-full h-96'>
        <MapContainer center={[fakeLocation.lat, fakeLocation.lng]} zoom={13} className='h-full w-full rounded-lg'>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[fakeLocation.lat, fakeLocation.lng]}>
            <Popup>
              {fakeLocation.address}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}