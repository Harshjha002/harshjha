import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col gap-4 p-6 bg-[#1A1A19] text-[#F6FCDF] rounded-lg shadow-lg border border-gray-700 transition-transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-[#31511E] underline">
        {project.name}
      </h2>
      <p className="text-sm text-gray-400">{project.sortDescription}</p>
      <div className="flex flex-col gap-2">
        <strong className="text-[#31511E]">Tech Stack:</strong>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#31511E] text-[#F6FCDF] rounded-md text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <Link href={`/projects/${project.id}`}>
          <button className="px-5 py-2 bg-[#859F3D] text-[#1A1A19] rounded-md font-medium hover:bg-[#31511E] hover:text-[#F6FCDF] transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
