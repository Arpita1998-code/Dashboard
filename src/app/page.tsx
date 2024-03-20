import React from 'react';
import Header from '../components/Header';
import Topcard from '../components/Topcard';
import BarChart from '../components/BarChart';
import RecentOrders from '../components/RecentOrders';  

const Home = () => {
  return (
      <div className="p-8">
        <main className="bg-gray-200 main-h-screen">
          <Header/>
          <Topcard/>
          <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart/>
          <RecentOrders/>
          </div>
        </main>
      </div>
  );
};

export default Home;
