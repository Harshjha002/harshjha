import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section id='About' className="flex flex-col justify-center p-24 items-center max-md:grid-cols-1 max-md:gap-12 h-full border-b mb-12">
    <h1 className="text-3xl font-extrabold text-blue-600 mb-6 underline ">About Me</h1>
    <p className="text-lg text-gray-300 leading-relaxed">
      Hello! I’m <span className="font-bold text-blue-600">Harsh Jha</span>, an aspiring <span className="font-semibold text-blue-600">Full-Stack Web Developer</span> passionate about creating efficient and scalable applications. I have experience with the <span className="font-semibold">MERN Stack</span> (MongoDB, Express.js, React.js, Node.js), <span className="font-semibold">Next.js</span>, <span className="font-semibold">Tailwind CSS</span>, and other modern technologies that help build dynamic, user-friendly applications.
    </p>
    <p className="mt-4 text-lg text-gray-300 leading-relaxed">
      I graduated with a <span className="font-semibold">Bachelor's in Computer Applications (BCA)</span> from <span className="font-semibold text-blue-600">Girijananda Chowdhury Institute of Management and Technology</span> in 2023. Following that, I dedicated a year to self-learning and traveling, gaining valuable experiences and skills. Currently, I am pursuing a <span className="font-semibold">Master's in Computer Applications (MCA)</span> online from <span className="font-semibold text-blue-600">Jain University</span>, where I continue to sharpen my skills and knowledge.
    </p>
    <p className="mt-4">
      You can check out my skills and technologies I am proficient in by visiting 
      <Link href="/tech-stack" className="text-blue-600 hover:underline ml-1">
        my Tech Stack
      </Link>.
    </p>
  </section>
  );
};

export default About;
