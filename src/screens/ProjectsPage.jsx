import React from 'react';
import HeaderComponent from '../components/HeaderComponent'
import ProjectFrameComponent from '../components/ProjectFrameComponent';
import MrImage from '../images/myrecords.png'; // Caminho relativo à imagem local
import PodioImage from '../images/podio.png'; // Caminho relativo à imagem local

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
  <div className="bg-black text-white flex flex-col h-screen">
    <HeaderComponent/>
      <p className='font-montserrat text-8xl pl-7 p-12'>
        PROJETOS
      </p>
      {/* Esse container deve conter os elementos dos projetos. */}
      <div className='h-[100%] w-[100%] flex flex-row justify-between pl-9 pr-9'>
        <ProjectFrameComponent project={myrecords}/>
        <ProjectFrameComponent project={podio}/>
      </div>
  </div>
  );
}

export default ProjectsPage;