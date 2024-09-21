import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";


function HeaderComponent(){
  // font-thin: Fonte mais fina.
  // font-light: Fonte leve.
  // font-normal: Fonte normal (padrão).
  // font-medium: Fonte média.
  // font-semibold: Fonte semi-negrito.
  // font-bold: Fonte negrito.
  // font-extrabold: Fonte extra-negrito.
  // font-black: Fonte muito negrito.

  return (
    <div className='pl-10 pr-10 bg-transparent text-white text-2xl font-thin h-[12%] w-[100%] flex flex-row items-center align-center justify-center justify-between'> 
      <Link to='/' className="hover:underline"> HOME </Link>
      <Link to='/projects-page' className="hover:underline"> PROJETOS PESSOAIS </Link>
      <Link to='/academic-projects-page' className="hover:underline"> PROJETOS ACADÊMICOS </Link>
      <Link to='/about-me-page' className="hover:underline"> SOBRE MIM </Link>
    </div>
  );
}

export default HeaderComponent;