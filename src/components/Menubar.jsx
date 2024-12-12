import React from 'react';
import Image from 'next/image';

const fakeMenuItems = [
  { id: 1, name: 'Burger', price: 5.99, description: 'A delicious beef burger', image: '/item-01.jpg' },
  { id: 2, name: 'Pizza', price: 8.99, description: 'Cheesy pepperoni pizza', image: '/item-02.jpg' },
  { id: 3, name: 'Salad', price: 4.99, description: 'Fresh garden salad', image: '/item-03.jpg' },
  { id: 4, name: 'Pasta', price: 7.99, description: 'Italian pasta with marinara sauce', image: '/item-04.jpg' },
  { id: 5, name: 'Sushi', price: 12.99, description: 'Assorted sushi platter', image: '/item-05.jpg' },
  { id: 6, name: 'Steak', price: 15.99, description: 'Grilled steak with vegetables', image: '/item-06.jpg' },
];

export default function MenuBar() {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Our Menu</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {fakeMenuItems.map(item => (
          <div key={item.id} className='p-4 bg-gray-100 rounded-lg shadow-sm'>
            <div className='relative w-full h-48 mb-4'>
              <Image src={item.image} alt={item.name} layout='fill' objectFit='cover' className='rounded-lg' />
            </div>
            <h2 className='text-xl font-bold mb-2'>{item.name}</h2>
            <p className='text-gray-700 mb-2'>${item.price.toFixed(2)}</p>
            <p className='text-gray-600 mb-2'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}