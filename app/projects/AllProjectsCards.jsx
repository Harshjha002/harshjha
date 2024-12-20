import React from 'react';

const AllProjectsCards = ({ myProjects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {myProjects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col gap-4 p-6 bg-[#1A1A19] text-[#F6FCDF] rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          {/* Project Title */}
          <h2 className="text-2xl font-bold text-[#31511E] underline">
            {project.name}
          </h2>

          {/* Project Description */}
          <p className="text-gray-300 leading-relaxed">
            {project.longDescription || project.sortDescription}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-col gap-2 mt-4">
            <strong className="text-[#859F3D]">Tech Stack:</strong>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#31511E] text-[#F6FCDF] rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-auto">
            {project.liveLink && <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#859F3D] text-[#1A1A19] rounded-md font-medium hover:bg-[#31511E] hover:text-[#F6FCDF] transition-colors"
            >
              Live Demo
            </a>}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#1A1A19] text-[#F6FCDF] border border-[#859F3D] rounded-md font-medium hover:bg-[#31511E] hover:text-[#F6FCDF] transition-colors"
            >
              Source Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProjectsCards;
