import React from 'react';
import { FaDollarSign, FaUsers, FaUtensils, FaShoppingCart } from 'react-icons/fa';

const cardDetails = {
  revenue: {
    icon: <FaDollarSign className='text-black text-2xl' />,
    label: 'Revenue',
    value: '$500',
  },
  users: {
    icon: <FaUsers className='text-green-500 text-2xl' />,
    label: 'Users',
    value: '6',
  },
  'menu-items': {
    icon: <FaUtensils className='text-blue-500 text-2xl' />,
    label: 'Menu Items',
    value: '60',
  },
  orders: {
    icon: <FaShoppingCart className='text-blue-900 text-2xl' />,
    label: 'Orders',
    value: '12',
  },
};

export default function Card({ type }) {
  const { icon, label, value } = cardDetails[type] || {};

  return (
    <div className='bg-white shadow-lg rounded-2xl p-4 flex-1 flex items-center gap-4'>
      {icon}
      <div className='flex flex-col justify-between items-start'>
        <div className='text-gray-700 text-lg'>{label}</div>
        <div className='text-black font-bold text-2xl'>{value}</div>
      </div>
    </div>
  );
}