import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const fakeUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { id: 4, name: 'Alice Davis', email: 'alice@example.com', role: 'User' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User' },
  { id: 6, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User' },
];

export default function AllUsers() {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-3xl font-bold mb-6 text-center'>All Users</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {fakeUsers.map(user => (
          <div key={user.id} className='p-4 bg-gray-100 rounded-lg shadow-sm flex items-center gap-4'>
            <FaUserCircle className='text-gray-500 text-4xl' />
            <div>
              <h2 className='text-xl font-bold mb-1'>{user.name}</h2>
              <p className='text-gray-700 mb-1'>{user.email}</p>
              <span className='text-sm text-gray-500'>{user.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}