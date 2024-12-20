import React from 'react';
import ProjectCard from './ProjectCard';
import { myProjects } from '@/data';
import Link from 'next/link';

const Projects = () => {
  return (
    <section
      id="Projects"
      className="p-16 flex flex-col justify-center items-center bg-[#1A1A19] text-gray-300 border-b border-gray-700 rounded-md mb-16"
    >
      <h1 className="text-4xl font-extrabold text-[#31511E] mb-6 underline decoration-[#859F3D] underline-offset-8">
        My Projects
      </h1>
      <p className="text-lg leading-relaxed text-center max-w-3xl mb-12">
        I have worked on a variety of projects that showcase my skills in 
        full-stack web development. Below are some of the projects I’ve built 
        using modern technologies. Feel free to explore them!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Render Priority Projects */}
        {myProjects
          .filter((item) => item.priority) // Filtering projects with the `priority` flag
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
      {/* Call to Action for All Projects */}
      <div className="mt-8">
        <p className="text-center text-lg">
          And much more! Check out all my projects{' '}
          <Link href="/projects" className="text-[#859F3D] hover:underline">here
          </Link> ...
        </p>
      </div>
    </section>
  );
};

export default Projects;
