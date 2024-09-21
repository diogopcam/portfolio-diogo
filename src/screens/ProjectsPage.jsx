import React from 'react';
import HeaderComponent from '../components/HeaderComponent'
import ProjectFrameComponent from '../components/ProjectFrameComponent';
import MrImage from '../images/myrecords.png'; // Caminho relativo à imagem local
import PodioImage from '../images/podio.png'; // Caminho relativo à imagem local
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
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className="bg-[url('/Users/dpcam/Desktop/portfolio-diogo/src/images/360_F_227215665_8HbqJ2T9djgJU4mkLJJEmesp5XYhlUTk.jpg')] bg-cover text-white flex flex-col justify-between h-screen p-4">
        <HeaderComponent/>
        <div class="pl-11 pr-11 h-[60%] w-[100%] flex items-center gap-20">
          <ProjectFrameComponent project={myrecords}/>
          <ProjectFrameComponent project={podio}/>
        </div>
        <p className='text-9xl pb-10 pl-10'>
          PROJETOS
        </p>
      </div>
    </motion.div>
  );
}

export default ProjectsPage;