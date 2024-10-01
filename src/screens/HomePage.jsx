import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import HeaderComponent from '../components/HeaderComponent';
import ProjectFrameComponent from '../components/ProjectFrameComponent';
import MrImage from '../assets/images/myrecords.png';
import PodioImage from '../assets/images/podio.png';
import TechIcons from '../components/TechIcons';
import semBarreirasImage from '../assets/trajectory-icons/sem-barreiras.png';
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
    position: 'Bacharelando em Engenharia de Software'
  }

  // Animação de surgimento
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Gerenciando a visibilidade de cada seção
  const [isVisible, setIsVisible] = useState({
    sobreMim: false,
    trajetoria: false,
    projetos: false,
    tecnologias: false
  });

  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const sectionId = entry.target.id;

        if (entry.isIntersecting) {
          // Quando a seção entra na viewport, ativa a animação
          setIsVisible(prev => ({ ...prev, [sectionId]: true }));
        } else {
          // Quando a seção sai da viewport, redefine a visibilidade para que a animação possa ocorrer novamente
          setIsVisible(prev => ({ ...prev, [sectionId]: false }));
        }
      });
    }, { threshold: 0.1 });

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-[url('https://i.imgur.com/J0sCj2O.jpg')] bg-cover flex flex-col pl-5 pr-5 items-center">
      
      {/* Header definition */}
      <div className="fixed top-0 left-0 w-full z-10">
          <HeaderComponent />
      </div>
      
      {/* SOBRE MIM - COMPONENTE 1 */}
      <div className='pt-[12vh] h-[100vh] text-white text-center items-center justify-center flex flex-col gap-14'> 
          <p className="w-[80vh] text-xl text font-thin"> 
              Estudante do 4º semestre de Engenharia de Software na PUCRS, sou um aspirante a desenvolvedor full-stack com experiência prática em React, React Native e Java. Busco minha primeira experiência profissional como desenvolvedor para aprimorar e amadurecer minhas habilidades e competências como desenvolvedor.
          </p>
          <p className='text-8xl pb-10 pl-10'>
              DIOGO PESSIN CAMARGO
          </p>
      </div>
  
      {/* TRAJETÓRIA ACADEMICA E PROFISSIONAL - COMPONENTE 2*/}
      <motion.div 
        id="trajetoria" 
        ref={el => sectionsRef.current[1] = el} // Armazena a referência da seção
        className='pt-[12vh] h-[100vh] text-white text-center items-center justify-center flex flex-col gap-14'
        initial="hidden"
        animate={isVisible.trajetoria ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 1.2 }}
      >
        <p className='text-6xl'> TRAJETÓRIA </p>
        <div className='flex flex-row justify-center gap-40'>
          <div className='flex flex-col items-center gap-10'>
            <p className='text-4xl'> Profissional </p>
            <TrajectoryComponent 
              profile={thoughtworks}
              bgColor='black'
              borderRadius=''
            />
          </div>
          <div className='flex flex-col items-center gap-10'>
            <p className='text-4xl'> Acadêmica </p>
            <TrajectoryComponent 
              profile={pucrs} 
              bgColor='black'
              borderRadius=''
            />
            <TrajectoryComponent profile={sembarreiras} />
          </div>
        </div>
      </motion.div>

      {/* PROJETOS - COMPONENTE 3 */}
      <motion.div 
        id="projetos" 
        ref={el => sectionsRef.current[2] = el} // Armazena a referência da seção
        className="pt-[12vh] h-[100vh] text-white text-center items-center justify-center flex flex-col gap-14"
        initial="hidden"
        animate={isVisible.projetos ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <p className='text-8xl pb-9 pl-9'>PROJETOS</p>
        <div className="flex flex-row h-[60%] w-[150vh] items-center gap-10 md:flex-row md:justify-center">
          <ProjectFrameComponent project={myrecords} />
          <ProjectFrameComponent project={podio} />
        </div>
      </motion.div>

      {/* STACK DE TECNOLOGIAS - COMPONENTE 4*/}
      <motion.div 
        id="tecnologias" 
        ref={el => sectionsRef.current[3] = el} // Armazena a referência da seção
        className="pt-[12vh] h-[100vh] text-white text-center items-center justify-center flex flex-col gap-14"
        initial="hidden"
        animate={isVisible.tecnologias ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <p className='text-8xl pb-9 pl-9'>Stack de tecnologias</p>
        <div className="flex flex-row w-[150vh] items-center md:flex-row md:justify-center">
          <TechIcons />
        </div>
      </motion.div>
    </div>
  );
}

export default HomePage;
