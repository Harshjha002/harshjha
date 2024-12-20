import React from 'react';
import { myProjects } from '@/data';
import AllProjectsCards from './AllProjectsCards';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-300 p-10">
      <h1 className="text-4xl font-extrabold text-center text-[#31511E] mb-10 underline">
        All Projects
      </h1>
      <p className="text-center text-lg mb-12 leading-relaxed">
        Explore the complete list of my projects, showcasing various technologies and solutions. Dive into the details to learn more!
      </p>
      <AllProjectsCards myProjects={myProjects} />
    </div>
  );
};

export default ProjectsPage;
