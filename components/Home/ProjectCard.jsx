import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ project }) => {
    
  return (
 <>
      <div key={project.id} className="card bg-base-100 w-96 shadow-xl ">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white underline p-1">{project.name}</h2>
        <p>{project.sortDescription}</p>
        <p className='p-2 border border-gray-600  m-1'><strong>Tech-Stack : </strong> {project.techStack.map((item) =><span className="flex gap-1">{item}</span> )}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary p-5 m-2"><Link href={`/projects/${project.id}`}>View Details</Link></button>
        </div>
      </div>
    </div>
 </>
  );
};

export default ProjectCard;
