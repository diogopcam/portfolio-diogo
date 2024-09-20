import React from 'react';
import '../index.css';
import HeaderComponent from '../components/HeaderComponent';

function LandingPage() {
  return (
    <div className="bg-black text-white flex flex-col justify-between h-screen p-4">
        <HeaderComponent/>
        <p className='text-9xl pb-7 pl-7'>
          PORTFÓLIO
        </p>
    </div>
  );
}

export default LandingPage;