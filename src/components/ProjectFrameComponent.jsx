import React from "react";
import githubImage from "../assets/images/github.png";

function ProjectFrameComponent({ project }) {
  return (
    <div
      className="relative bg-white h-[80%] w-[100%] text-black overflow-hidden rounded-xl"
      style={{
        backgroundImage: `url(${project.image})`, // A imagem de capa do projeto
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Informações do projeto (visíveis ao hover) */}
      <div className="absolute text-start justify-around text-white inset-0 bg-black bg-opacity-70 p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col">
        <h2 className="text-2xl font-bold">{project.name}</h2>
        <p className="mt-2">{project.description}</p>

      <div>
        <p className="text-white"> Tecnologias utilizadas </p>
      </div>

        <div className="mt-4 h-[100%] flex flex-row justify-between">
          <div className="flex flex-row gap-3 h-[20%] items-center"> 
          <img src={githubImage} className="h-[60%] bg-white border border-white rounded-full"/>
            <a
              href={project.repository.front}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Repositório Frontend
            </a>
          </div>
          <div className="flex flex-row gap-3 h-[20%] items-center">
          <img src={githubImage} className="h-[60%] bg-white border border-white rounded-full"/>
            <a
              href={project.repository.back}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Repositório Backend
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectFrameComponent;
