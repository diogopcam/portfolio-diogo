import React from "react";
import { Link } from "react-router-dom"; // Importa o Link

function HeaderComponent(){
    return (
        <div className='bg-white text-black text-lg font-r h-[15%] flex flex-row items-center align-center justify-center justify-around'> 
          <Link to='/projects-page' className="hover:underline"> SOBRE MIM </Link>
          {/* <p > SOBRE MIM </p>
          <p> PROJETOS PESSOAIS </p>
          <p> PROJETOS ACADÊMICOS </p>
          <p> TECNOLOGIAS </p> */}
      </div>
    );
}

export default HeaderComponent;