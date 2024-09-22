import React from 'react';
import '../index.css';
import HeaderComponent from '../components/HeaderComponent';
// import BackgroundTwo from './images/black2.jpeg';
import {motion} from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: "100%" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "-100%" }
};

const pageTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 0.5,
  duration: 0.2,
};

function AboutMePage() {
  return (
  <motion.div
  initial={{ x: '80%' }}
  animate={{ x: 0}}
  transition={{ duration: 0.5 }}
  >
    <div className="bg-[url('https://i.imgur.com/J0sCj2O.jpg')] bg-cover text-white flex flex-col justify-between h-screen p-4">
        <HeaderComponent/>
        <p className='text-9xl pb-10 pl-10'>
          SOBRE MIM
        </p>
    </div>
    </motion.div>
  );
}

export default AboutMePage;