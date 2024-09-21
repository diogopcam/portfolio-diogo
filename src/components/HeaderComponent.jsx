import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

function HeaderComponent(){

  return (
    <div className='pl-10 pr-10 bg-transparent text-white text-lg font-r h-[15%] w-[100%] flex flex-row items-center align-center justify-center justify-between'> 
      <Link to='/projects-page' className="hover:underline"> SOBRE MIM </Link>
      <Link to='/projects-page' className="hover:underline"> PROJETOS PESSOAIS </Link>
    </div>
  );
}

export default HeaderComponent;