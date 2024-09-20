import React from 'react';
import HeaderComponent from '../components/HeaderComponent'
import ProjectFrameComponent from '../components/ProjectFrameComponent';

function ProjectsPage(){
    return (
    <div className="bg-black text-white flex flex-col h-screen">
        <HeaderComponent/>
        <p className='font-montserrat text-8xl pl-7 p-12'>
          PROJETOS
        </p>
        {/* Esse container deve conter os elementos dos projetos. */}
        <div className='h-[100%] w-[100%] flex flex-row justify-between pl-9 pr-9'>
         <ProjectFrameComponent/>
         <ProjectFrameComponent/>
        </div>
    </div>
    );
}

export default ProjectsPage;