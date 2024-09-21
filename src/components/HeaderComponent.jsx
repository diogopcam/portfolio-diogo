import React from "react";
import { Link } from "react-router-dom"; // Importa o Link

function HeaderComponent(){
    return (
        <div className='bg-black text-white text-lg font-r h-[15%] flex flex-row items-center align-center justify-center justify-around'> 
          <Link to='/projects-page' className="hover:underline"> SOBRE MIM </Link>
          <Link to='/projects-page' className="hover:underline"> PROJETOS PESSOAIS </Link>
          <p> PROJETOS ACADÊMICOS </p>
          <p> TECNOLOGIAS </p>
      </div>
    );
}

export default HeaderComponent;