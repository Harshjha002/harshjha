import React from 'react';
import SocialLinks from './SocialLinks';
import { SocialLink } from '@/data.js';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      id="Home"
      className="grid grid-cols-2 items-center gap-8 py-16 px-24 border-b border-gray-700 max-md:grid-cols-1 max-md:gap-12 max-md:px-8"
    >
      {/* Left Section: Intro Text */}
      <div className="flex flex-col justify-center items-start space-y-6">
        <h1 className="text-4xl font-extrabold text-[#31511E] leading-snug">
          Turning Ideas into Impactful <br />
          Digital Experiences
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Welcome! I’m <span className="font-bold text-[#31511E]">Harsh Jha</span>, a
          <span className="text-[#31511E] font-semibold"> Full-Stack Web Developer</span> and 
          <span className="text-[#31511E] font-semibold"> Creative Designer</span>. 
          I specialize in building scalable, efficient applications and designing intuitive, user-centric interfaces that drive meaningful results. Let’s create something remarkable together.
        </p>
        <Link
          href="#Projects"
          className="px-6 py-3 bg-[#31511E] text-white font-semibold rounded-md shadow-md hover:bg-[#859F3D] transition duration-300"
        >
          Explore My Work
        </Link>
      </div>

      {/* Right Section: Social Links */}
      <div className="flex justify-center items-center">
        <SocialLinks SocialLink={SocialLink} />
      </div>
    </section>
  );
};

export default HeroSection;
