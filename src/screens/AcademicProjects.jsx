import React from 'react';
import '../index.css';
import HeaderComponent from '../components/HeaderComponent';
// import BackgroundTwo from './images/black2.jpeg';


function AcademicProjects() {
  return (
    <div className="bg-[url('https://i.imgur.com/J0sCj2O.jpg')] bg-cover text-white flex flex-col justify-between h-screen p-4">
        <HeaderComponent/>
        <p className='text-9xl pb-10 pl-10'>
          PROJETOS
        </p>
    </div>
  );
}

export default AcademicProjects;