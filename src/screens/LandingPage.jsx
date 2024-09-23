import React from 'react';
import '../index.css';
import HeaderComponent from '../components/HeaderComponent';
import { motion } from 'framer-motion';

function LandingPage() {
  return (
    <motion.div
    initial={{ x: '80%' }}
    animate={{ x: 0}}
    transition={{ duration: 0.5 }}
    >
    <div className="bg-[url('https://i.imgur.com/J0sCj2O.jpg')] bg-cover text-black flex flex-col justify-between h-screen p-4">
        <HeaderComponent/>
        <p className='text-white text-9xl pb-10 pl-10'>
          BEM VINDO
        </p>
    </div>
    </motion.div>
  );
}

export default LandingPage;