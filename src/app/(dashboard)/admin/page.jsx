import React from 'react';
import Card from '@/components/Card';
import OrderChart from '@/components/OrderChart';
import Revenue from '@/components/Revenue';

export default function AdminPage() {
  return (
    <div className='p-4 flex flex-col gap-4 mt-10'>
      <h1 className='text-2xl font-bold mb-4'><span className='text-red-500'>Hi, Welcome</span> Kawsar Ahmed</h1>
      {/* USER CARDS */}
      <div className='flex gap-4 flex-wrap'>
        <Card type="revenue" />
        <Card type="users" />
        <Card type="menu-items" />
        <Card type="orders" />
      </div>

      {/* Middle Chart */}
      <div className='flex gap-4 flex-col lg:flex-row'>
        {/* Order Chart */}
        <div className='w-full lg:w-1/2 h-[450px]'>
          <OrderChart />
        </div>
        <div className='w-full lg:w-1/2 h-[450px]'>
          <Revenue />
        </div>
      </div>

      {/* BOTTOM CHART */}
      <div className='w-full h-[500px]'>
        {/* <Finance /> */}
      </div>
    </div>
  );
}