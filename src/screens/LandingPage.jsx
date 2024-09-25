import {React, useEffect} from 'react';
import '../index.css';
import HeaderComponent from '../components/HeaderComponent';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

   // Função para detectar rolagem
   useEffect(() => {
    const handleScroll = () => {
      // Detecta a posição do scroll atual + altura da janela visível
      const scrollPosition = window.scrollY + window.innerHeight;
      // Altura total do documento (página completa)
      const documentHeight = document.documentElement.scrollHeight;

      // Verifica se o usuário rolou até próximo do final (tolerância de 50px)
      if (scrollPosition >= documentHeight - 50) {
        // Navegar para a ProjectsPage com um atraso para permitir animação de saída
        setTimeout(() => {
          navigate('/projects-page');
        }, 500);
      }
    };

    // Adiciona o evento de rolagem quando o componente é montado
    window.addEventListener('scroll', handleScroll);

    // Remove o listener de rolagem ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate]);

  return (
    <motion.div
      initial={{ x: '80%' }}
      animate={{ x: 0}}
      exit={{ x: '-100%' }} // Animação de saída
      transition={{ duration: 0.5 }}
    >
      <div className="overflow-y-screen bg-[url('https://i.imgur.com/J0sCj2O.jpg')] bg-cover h-[105vh] text-black flex flex-col justify-between p-4">
          <HeaderComponent/>
          <p className='text-white text-9xl pb-10 pl-10'>
            DIOGO PESSIN
          </p>
      </div>
    </motion.div>
  );
}

export default LandingPage;