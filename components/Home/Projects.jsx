import React from 'react';
import ProjectCard from './ProjectCard';
import { myProjects } from '@/data';

const Projects = () => {
  return (
    <section id='Projects' className='p-24 mb-16 flex flex-col justify-center items-center'>
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6 text-center">My Projects</h1>
      <p className="text-lg text-gray-300 mb-12 text-center">
        I have worked on a variety of projects that showcase my skills in full-stack web development. Below are some of the projects I've built using the latest technologies. Feel free to explore them!
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {myProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
