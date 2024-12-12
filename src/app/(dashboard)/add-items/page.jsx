import React from 'react'
import AddItems from '@/components/Add-items'
export default function page() {
  return (
    <div className='p-4 flex flex-col gap-4 mt-10'>
        <h1 className='text-2xl font-bold mb-4'>
            <span className='text-red-500'>Hi, Welcome</span> Kawsar Ahmed
        </h1>
        <AddItems />
    </div>
  )
}
