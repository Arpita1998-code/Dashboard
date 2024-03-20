import Link from 'next/link';
import React from 'react';
import { IoHomeSharp, IoPersonAddOutline, IoBagOutline, IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

const Sidebar = ({children}) => {
  return (
    <div className="flex">
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
          <div className='flex flex-col items-center'>
             <Link href='/'>
                <div className='bg-blue-800 text-white inline-block'>
                <IoHomeSharp size={20}/>
                </div>
             </Link>
             <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
             <Link href='/'>
                <div className='bg-gray-100 hover:bg-gray-300 cursor-pointer my-4 inline-block'>
                <RxDashboard size={20}/>
                </div>
             </Link>
             <Link href='/'>
                <div className='bg-gray-100 hover:bg-gray-500 cursor-pointer my-4 inline-block'>
                <IoPersonAddOutline size={20}/>
                </div>
             </Link>
             <Link href='/'>
                <div className='bg-gray-100 hover:bg-gray-500 cursor-pointer my-4 inline-block'>
                <IoBagOutline size={20}/>
                </div>
             </Link>
             <Link href='/'>
                <div className='bg-gray-100 hover:bg-gray-500 cursor-pointer my-4 inline-block'>
                <IoSettingsOutline size={20}/>
                </div>
             </Link>
          </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
