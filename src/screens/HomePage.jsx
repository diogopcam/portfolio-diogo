import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import ProjectFrameComponent from '../components/ProjectFrameComponent';
import MrImage from '../assets/images/myrecords.png'; // Caminho relativo à imagem local
import PodioImage from '../assets/images/podio.png'; // Caminho relativo à imagem local
import TechIcons from '../components/TechIcons';
import semBarreirasImage from '../assets/trajectory-icons/sem-barreiras.png'; // Importando a imagem diretamente
import TrajectoryComponent from '../components/TrajectoryComponent';
import thoughtworksImage from '../assets/trajectory-icons/tw.png';
import pucrsImage from '../assets/trajectory-icons/pucrs.png';

function HomePage() {
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

  const sembarreiras = {
    image: semBarreirasImage,
    name: 'Sem Barreiras',
    position: 'Desenvolvedor front-end'
  };

  const thoughtworks = {
    image: thoughtworksImage,
    name: 'Thoughtworks',
    position: 'Jovem Aprendiz na Thoughtworks'
  }


  const pucrs = {
    image: pucrsImage,
    name: 'PUCRS',
    position: 'Bacharelado em Engenharia de Software - Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS) - 01/2023 a 12/2026'
  }

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
                Estudante do 4º semestre de Engenharia de Software na PUCRS, sou um aspirante a desenvolvedor full-stack com experiência prática em React, React Native e Java. Busco minha primeira experiência profissional como desenvolvedor para aprimorar minhas habilidades e criar soluções eficientes, criativas e escaláveis.
            </p>
            <p className='text-8xl pb-10 pl-10'>
                DIOGO PESSIN CAMARGO
            </p>
        </div>

        {/* {Trajetória acadêmica e profissional} */}
        <div className='text-white text-center items-center'>
          <p className='text-6xl'> TRAJETÓRIA </p>
          <div className='flex flex-row justify-center gap-40'>
          <div className='flex flex-col items-center'>
            <p> Profissional </p>
            <TrajectoryComponent 
              profile={thoughtworks}
              imageSize="w-[20vh]" // Tamanho personalizado
              border="border-white-500" // Cor da borda
              bgColor='black'
              borderRadius=''
            />
            </div>
            <div className='flex flex-col items-center'>
            <p> Acadêmica </p>
            <TrajectoryComponent 
                profile={pucrs} 
                imageSize="w-[15vh]" // Tamanho personalizado
                border="border-white-500" // Cor da borda
                bgColor='black'
                borderRadius=''/>
              <TrajectoryComponent profile={sembarreiras} />
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
            <div className="flex flex-row w-[150vh] items-center md:flex-row md:justify-center">
                <TechIcons />
            </div>
        </div>
    </div>
  );
}

export default HomePage;
