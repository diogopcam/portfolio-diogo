import React from 'react';
import '../index.css';
import HeaderComponent from '../components/HeaderComponent';
import { motion } from 'framer-motion';

function LandingPage() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className="bg-[url('https://i.imgur.com/J0sCj2O.jpg')] bg-cover text-black flex flex-col justify-between h-screen p-4">
        <HeaderComponent/>
        <p className='text-9xl pb-10 pl-10'>
          PORTFÓLIO
        </p>
    </div>
    </motion.div>
  );
}

export default LandingPage;