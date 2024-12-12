
"use client";
import Image from 'next/image';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', revenue: 100, orders: 30 },
    { name: 'Feb', revenue: 180, orders: 45 },
    { name: 'Mar', revenue: 130, orders: 40 },
    { name: 'Apr', revenue: 136, orders: 50 },
    { name: 'May', revenue: 80, orders: 20 },
    { name: 'Jun', revenue: 150, orders: 35 },
    { name: 'Jul', revenue: 200, orders: 60 },
    { name: 'Aug', revenue: 170, orders: 55 },
    { name: 'Sep', revenue: 140, orders: 45 },
    { name: 'Oct', revenue: 160, orders: 50 },
    { name: 'Nov', revenue: 190, orders: 65 },
    { name: 'Dec', revenue: 210, orders: 70 },
];

export default function Revenue() {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      {/* TITLE */}
      <div className='mt-5 flex justify-between items-center'>
        <h1>Monthly Revenue and Orders</h1>
        <Image src="/moreDark.png" alt="More Options" width={20} height={20} />
      </div>
      {/* CHART */}
      <div className='relative w-full h-[75%]'>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}