import React from "react";
import { Link } from "react-scroll"; // Importando Link do react-scroll

function HeaderComponent() {
  return (
    <div className='pl-10 pr-10 bg-black text-white text-2xl font-thin h-[10vh] w-[100%] flex flex-row items-center align-center justify-center justify-between'> 
      <Link to='sobre-mim' smooth={true} duration={500} className="hover:underline"> SOBRE MIM </Link>
      <Link to='trajetoria' smooth={true} duration={500} className="hover:underline"> TRAJETÓRIA </Link>
      <Link to='projetos' smooth={true} duration={500} className="hover:underline"> PROJETOS </Link>
      <Link to='tecnologias' smooth={true} duration={500} className="hover:underline"> TECNOLOGIAS </Link>
    </div>
  );
}

export default HeaderComponent;
