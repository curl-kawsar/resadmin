'use client';
import React, { useState } from 'react';
import { FaUtensils, FaDollarSign, FaAlignLeft, FaTags } from 'react-icons/fa';

export default function AddItems() {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemCategory, setItemCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Item Added:', { itemName, itemPrice, itemDescription, itemCategory });
    // Reset form fields
    setItemName('');
    setItemPrice('');
    setItemDescription('');
    setItemCategory('');
  };

  return (
    <div className='p-6 bg-white rounded-lg shadow-md flex flex-col lg:flex-row gap-6'>
      {/* LEFT SECTION */}
      <div className='flex-1'>
        <h1 className='text-3xl font-bold mb-6 text-center'>Add New Item</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          <div className='flex items-center gap-2'>
            <FaUtensils className='text-gray-500' />
            <div className='flex-1'>
              <label className='block text-sm font-medium text-gray-700'>Item Name</label>
              <input
                type='text'
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                required
              />
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <FaDollarSign className='text-gray-500' />
            <div className='flex-1'>
              <label className='block text-sm font-medium text-gray-700'>Item Price</label>
              <input
                type='number'
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                required
              />
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <FaAlignLeft className='text-gray-500' />
            <div className='flex-1'>
              <label className='block text-sm font-medium text-gray-700'>Item Description</label>
              <textarea
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                required
              />
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <FaTags className='text-gray-500' />
            <div className='flex-1'>
              <label className='block text-sm font-medium text-gray-700'>Item Category</label>
              <input
                type='text'
                value={itemCategory}
                onChange={(e) => setItemCategory(e.target.value)}
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                required
              />
            </div>
          </div>
          <button
            type='submit'
            className='mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Add Item
          </button>
        </form>
      </div>
      {/* RIGHT SECTION */}
      <div className='flex-1 bg-gray-100 p-6 rounded-lg shadow-inner'>
        <h2 className='text-2xl font-bold mb-4'>Tips for Adding Items</h2>
        <ul className='list-disc list-inside'>
          <li>Ensure the item name is unique and descriptive.</li>
          <li>Set a competitive price based on market research.</li>
          <li>Provide a detailed description to attract customers.</li>
          <li>Choose the appropriate category for better organization.</li>
        </ul>
        <div className='mt-6'>
          <h3 className='text-xl font-semibold mb-2'>Need Help?</h3>
          <p className='text-sm text-gray-600'>If you need assistance, please contact our support team.</p>
          <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}