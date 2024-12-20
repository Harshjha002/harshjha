import React from 'react';
import Link from 'next/link';

const AdminPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-gray-300 p-6 text-center">
      <h1 className="text-3xl font-bold text-[#31511E] mb-6">Work in Progress</h1>
      <p className="text-lg leading-relaxed mb-6">
        Sorry for the inconvenience! I’m currently working on the backend for this app, along with some exciting new projects. 
        In the meantime, feel free to check out:
      </p>
      <div className="flex flex-col items-center gap-4">
        <Link
          href="/projects"
          className="px-4 py-2 bg-[#859F3D] text-[#1A1A19] rounded-md font-medium hover:bg-[#31511E] hover:text-[#F6FCDF] transition-colors"
        >
          My Projects
        </Link>
        <a
          href="https://github.com/Harshjha002"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#1A1A19] text-[#F6FCDF] border border-[#859F3D] rounded-md font-medium hover:bg-[#31511E] hover:text-[#F6FCDF] transition-colors"
        >
          My GitHub
        </a>
      </div>
    </div>
  );
};

export default AdminPage;
