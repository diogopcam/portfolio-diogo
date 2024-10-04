import React from 'react';
import ExpoIcon from '../assets/tech-icons/expo.png';
import JavaIcon from '../assets/tech-icons/java.png';
import JavaScriptIcon from '../assets/tech-icons/javascript.png';
import PythonIcon from '../assets/tech-icons/python.png';
import ReactIcon from '../assets/tech-icons/react.png';
import SpringBootIcon from '../assets/tech-icons/spring-boot 1.png';
import TailwindIcon from '../assets/tech-icons/tailwind.png';

function TechIcons() {
  // Lista de ícones
  const techIcons = [
    { src: ExpoIcon, alt: 'Expo' },
    { src: JavaIcon, alt: 'Java' },
    { src: JavaScriptIcon, alt: 'JavaScript' },
    { src: PythonIcon, alt: 'Python' },
    { src: ReactIcon, alt: 'React' },
    { src: SpringBootIcon, alt: 'Spring Boot' },
    { src: TailwindIcon, alt: 'Tailwind CSS' },
  ];

  return (
    <div className='flex flex-row space-x-4 gap-4'>
      {techIcons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className='h-16 transition-transform transform hover:scale-110'
        />
      ))}
    </div>
  );
}

export default TechIcons;