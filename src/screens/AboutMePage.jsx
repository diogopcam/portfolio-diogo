import React from 'react';
import '../index.css';
import HeaderComponent from '../components/HeaderComponent';
// import BackgroundTwo from './images/black2.jpeg';
import {motion} from "framer-motion";

function AboutMePage() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
  >
    <div className="bg-[url('/Users/dpcam/Desktop/portfolio-diogo/src/assets/images/360_F_227215665_8HbqJ2T9djgJU4mkLJJEmesp5XYhlUTk.jpg')] bg-cover text-white flex flex-col justify-between h-screen p-4">
        <HeaderComponent/>
        <p className='text-9xl pb-10 pl-10'>
          SOBRE MIM
        </p>
    </div>
    </motion.div>
  );
}

export default AboutMePage;