import React from 'react';

const fakeContactData = {
  phone: '+1 (555) 123-4567',
  email: 'contact@restaurant.com',
  address: '123 Fake Street, New York, NY 10001, USA',
  hours: {
    monday: '9:00 AM - 9:00 PM',
    tuesday: '9:00 AM - 9:00 PM',
    wednesday: '9:00 AM - 9:00 PM',
    thursday: '9:00 AM - 9:00 PM',
    friday: '9:00 AM - 10:00 PM',
    saturday: '10:00 AM - 10:00 PM',
    sunday: '10:00 AM - 8:00 PM',
  },
};

export default function Contact() {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Contact Us</h1>
      <div className='mb-6'>
        <h2 className='text-xl font-bold mb-2'>Phone</h2>
        <p className='text-gray-700'>{fakeContactData.phone}</p>
      </div>
      <div className='mb-6'>
        <h2 className='text-xl font-bold mb-2'>Email</h2>
        <p className='text-gray-700'>{fakeContactData.email}</p>
      </div>
      <div className='mb-6'>
        <h2 className='text-xl font-bold mb-2'>Address</h2>
        <p className='text-gray-700'>{fakeContactData.address}</p>
      </div>
      <div className='mb-6'>
        <h2 className='text-xl font-bold mb-2'>Hours</h2>
        <ul className='list-disc list-inside text-gray-700'>
          {Object.entries(fakeContactData.hours).map(([day, hours]) => (
            <li key={day}>
              <span className='font-semibold capitalize'>{day}:</span> {hours}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}