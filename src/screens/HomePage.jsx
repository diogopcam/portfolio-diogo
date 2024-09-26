import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import ProjectFrameComponent from '../components/ProjectFrameComponent';
import MrImage from '../assets/images/myrecords.png'; // Caminho relativo à imagem local
import PodioImage from '../assets/images/podio.png'; // Caminho relativo à imagem local
import TechIcons from '../components/TechIcons';

import { motion } from 'framer-motion';

function HomePage() {
//   const navigate = useNavigate();

//   // Função para detectar rolagem
//   useEffect(() => {
//     const handleScroll = () => {
//       // Detecta a posição do scroll atual + altura da janela visível
//       const scrollPosition = window.scrollY + window.innerHeight;
//       // Altura total do documento (página completa)
//       const documentHeight = document.documentElement.scrollHeight;

//       // Verifica se o usuário rolou até próximo do final (tolerância de 50px)
//       if (scrollPosition >= documentHeight - 50) {
//         // Navegar para a ProjectsPage com um atraso para permitir animação de saída
//         setTimeout(() => {
//           navigate('/projects-page');
//         }, 500);
//       }
//     };

//     // Adiciona o evento de rolagem quando o componente é montado
//     window.addEventListener('scroll', handleScroll);

//     // Remove o listener de rolagem ao desmontar o componente
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [navigate]);

  // Dados do projeto
  const myrecords = {
    name: 'My Records',
    description: 'Uma tentativa de replicar o Topsters 3, uma plataforma que permite que os usuários criem colagens de seus álbuns favoritos e realizem o download dessa colagem em pdf.',
    repository: {
      front: 'https://github.com/diogopcam/myrecords-frontend',
      back: 'https://github.com/diogopcam/myrecords-backend'
    },
    image: MrImage
  };

  const podio = {
    name: 'Podio',
    description: 'Uma plataforma cujo intuito é centralizar informações gerais sobre os atletas olímpicos brasileiros, como biografia, títulos e redes sociais.',
    repository: {
      front: 'https://github.com/diogopcam/podio-frontend',
      back: 'https://github.com/diogopcam/podio-backend'
    },
    image: PodioImage
  };

  return (
    // Full page
    <div className="bg-[url('https://i.imgur.com/J0sCj2O.jpg')] bg-cover flex flex-col pl-5 pr-5 items-center">
        {/* // Header definition */}
        <div className="fixed top-0 left-0 w-full z-10">
            <HeaderComponent />
        </div>
        
        {/* Landing Page */}
        <div className='pt-[12vh] h-[100vh] text-white text-center items-center justify-center flex flex-col gap-14'>
            <p className="w-[80vh] text-xl text font-thin"> 
                Estudante do 4º semestre de Engenharia de Software na PUCRS, sou um aspirante a desenvolvedor full-stack com experiência prática em React, React Native e Java. Busco minha primeira experiência profissional como desenvolvedor para aprimorar minhas habilidades e criar soluções criativas e escaláveis.
            </p>
            <p className='text-8xl pb-10 pl-10'>
                DIOGO PESSIN CAMARGO
            </p>
        </div>

        {/* {Trajetória acadêmica e profissional} */}
        <div className='text-white text-center items-center'>
          <p className='text-6xl'> TRAJETÓRIA ACADÊMICA E PROFISSIONAL </p>
          <div className='flex flex-row justify-center gap-40'>
            <div className='flex flex-col'> 
              <p> Texto 1 </p>
              <p> Texto 2 </p>
            </div>
            <div>
              <p> Texto 2 </p>
              <p> Texto 2 </p>
            </div>
          </div>
        </div>

        {/* Minha trajetória */}
        <div className="pt-[12vh] h-[100vh] text-white text-center items-center justify-center flex flex-col gap-14">
          <p className='text-8xl pb-9 pl-9'>PROJETOS</p>
            <div className="flex flex-row h-[60%] w-[150vh] items-center gap-10 md:flex-row md:justify-center">
                <ProjectFrameComponent project={myrecords} />
                <ProjectFrameComponent project={podio} />
            </div>
        </div>


              {/* Projects Page */}
        <div className="pt-[12vh] h-[100vh] text-white text-center items-center justify-center flex flex-col gap-14">
          <p className='text-8xl pb-9 pl-9'>Stack de tecnologias</p>
            <div className="flex flex-row h-[60%] w-[150vh] items-center gap-10 md:flex-row md:justify-center">
                <TechIcons />
            </div>
        </div>

      {/* Projects Page */}
        <div className="pt-[12vh] h-[100vh] text-white text-center items-center justify-center flex flex-col gap-14">
          <p className='text-8xl pb-9 pl-9'>PROJETOS</p>
            <div className="flex flex-row h-[60%] w-[150vh] items-center gap-10 md:flex-row md:justify-center">
                <ProjectFrameComponent project={myrecords} />
                <ProjectFrameComponent project={podio} />
            </div>
        </div>
    </div>
  );
}

export default HomePage;
