import React from "react";

function ProjectFrameComponent({ project }) {
  return (
    <div
      className="relative bg-white h-[70%] w-[47%] text-black overflow-hidden"
      style={{
        backgroundImage: `url(${project.image})`, // A imagem de capa do projeto
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Informações do projeto (visíveis ao hover) */}
      <div className="absolute inset-0 bg-white bg-opacity-70 p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">{project.name}</h2>
        <p className="mt-2 text-center">{project.description}</p>
        <div className="mt-4">
          <a
            href={project.repository.front}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Repositório Frontend
          </a>
          <br />
          <a
            href={project.repository.back}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Repositório Backend
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectFrameComponent;
