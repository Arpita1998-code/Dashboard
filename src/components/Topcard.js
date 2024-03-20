import React from 'react'

const Topcard = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4'>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-[740px] border p-4 rounded-lg relative top-0 left-4'>
        <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>45,231.89</p>
            <p className='text-gray-600'>Total Revenue</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-700 text-lg'>+18%</span>
        </p>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-[500px] border p-4 rounded-lg relative top-0 left-[143px]'>
        <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>12,234</p>
            <p className='text-gray-600'>Sales</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-700 text-lg'>+18%</span>
        </p>
      </div>
      <div className='bg-white flex justify-between w-[250px] border p-4 rounded-lg relative top-0 left-[30px]'>
        <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>+3250</p>
            <p className='text-gray-600'>Subscriptions</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-700 text-lg'>+18%</span>
        </p>
      </div>
    </div>
  )
}

export default Topcard
