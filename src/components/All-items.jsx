import React from 'react';

const fakeItems = [
  { id: 1, name: 'Burger', price: 5.99, description: 'A delicious beef burger', category: 'Fast Food' },
  { id: 2, name: 'Pizza', price: 8.99, description: 'Cheesy pepperoni pizza', category: 'Fast Food' },
  { id: 3, name: 'Salad', price: 4.99, description: 'Fresh garden salad', category: 'Healthy' },
  { id: 4, name: 'Pasta', price: 7.99, description: 'Italian pasta with marinara sauce', category: 'Italian' },
  { id: 5, name: 'Sushi', price: 12.99, description: 'Assorted sushi platter', category: 'Japanese' },
  { id: 6, name: 'Sushi', price: 12.99, description: 'Assorted sushi platter', category: 'Japanese' },
];

export default function AllItems() {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-3xl font-bold mb-6 text-center'>All Items</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {fakeItems.map(item => (
          <div key={item.id} className='p-4 bg-gray-100 rounded-lg shadow-sm'>
            <h2 className='text-xl font-bold mb-2'>{item.name}</h2>
            <p className='text-gray-700 mb-2'>${item.price.toFixed(2)}</p>
            <p className='text-gray-600 mb-2'>{item.description}</p>
            <span className='text-sm text-gray-500'>{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}