import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col justify-center items-center py-16 px-10 bg-[#1A1A19] text-center text-gray-300 border-b border-gray-700 rounded-md mb-12 max-w-5xl mx-auto shadow-lg"
    >
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-[#31511E] mb-8 underline decoration-[#859F3D] underline-offset-8">
        About Me
      </h1>
      
      {/* Introduction */}
      <p className="text-lg leading-relaxed mb-6">
        Hi, I'm <span className="text-[#31511E] font-bold">Harsh Jha</span>, a 
        <span className="font-semibold text-[#859F3D]"> Full-Stack Developer</span> dedicated to delivering impactful 
        and scalable digital solutions. With expertise in modern technologies such as 
        <span className="font-semibold"> React.js</span>, <span className="font-semibold">Next.js</span>, 
        <span className="font-semibold"> Tailwind CSS</span>, and the 
        <span className="font-semibold"> MERN Stack</span>, I create user-friendly and dynamic applications.
      </p>
      
      {/* Education */}
      <p className="text-lg leading-relaxed mb-6">
        I graduated with a <span className="font-semibold">Bachelor's in Computer Applications (BCA)</span> from 
        <span className="text-[#31511E] font-semibold"> Girijananda Chowdhury Institute of Management and Technology</span> in 2023. 
        During a dedicated year of self-learning and traveling, I gained invaluable skills and life experiences. 
        Currently, I am pursuing a <span className="font-semibold">Master's in Computer Applications (MCA)</span> from 
        <span className="text-[#31511E] font-semibold"> Jain University</span>, further honing my knowledge in software development.
      </p>
      
      {/* Tech Stack Link */}
      <p className="text-lg leading-relaxed">
        Dive deeper into my technical expertise by exploring
        <p
          className="text-[#859F3D] font-semibold hover:underline ml-1"
        >
          my Tech Stack
        </p>.
      </p>
    </section>
  );
};

export default About;
