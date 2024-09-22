import React from 'react';
import HeaderComponent from '../components/HeaderComponent'
import ProjectFrameComponent from '../components/ProjectFrameComponent';
import MrImage from '../assets/images/myrecords.png'; // Caminho relativo à imagem local
import PodioImage from '../assets/images/podio.png'; // Caminho relativo à imagem local
import {motion} from "framer-motion";

function ProjectsPage(){
  const myrecords = {
    'name': 'My Records',
    'description': 'Uma tentativa de replicar o Topsters 3, uma plataforma que permite que os usuários criem colagens de seus álbuns favoritos e realizem o download dessa colagem em pdf.',
    'repository': {
      'front': 'https://github.com/diogopcam/myrecords-frontend',
      'back': 'https://github.com/diogopcam/myrecords-backend'
    },
    'image': MrImage
  };

  const podio = {
    'name': 'Podio',
    'description': 'Uma plataforma cujo intuito é centralizar informações gerais sobre os atletas olímpicos brasileiros, como biografia, títulos e redes-sociais.',
    'repository': {
      'front': 'https://github.com/diogopcam/podio-frontend',
      'back': 'https://github.com/diogopcam/podio-backend'
    },
    'image': PodioImage
  };
  
  return (
    <motion.div
    initial={{ x: '80%' }}
    animate={{ x: 0}}
    transition={{ duration: 0.5 }}
    >
      <div className="bg-[url('https://i.imgur.com/J0sCj2O.jpg')] bg-cover text-white flex flex-col justify-between h-screen p-4">
        <HeaderComponent/>
        <p className='text-8xl pt-10 pb-9 pl-9'>
          PROJETOS
        </p>
        <div class="pl-11 pr-11 h-[60%] w-[100%] flex items-center gap-20">
          <ProjectFrameComponent project={myrecords}/>
          <ProjectFrameComponent project={podio}/>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectsPage;
