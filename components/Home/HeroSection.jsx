import React from 'react';
import SocialLinks from './SocialLinks';
import { SocialLink } from '@/data.js';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section id="Home" className="grid grid-cols-2 gap-8 p-24 items-center max-md:grid-cols-1 max-md:gap-12 h-full border-b">
            {/* Text Section */}
            <div className="flex flex-col justify-center items-start border-r p-10">
                <h1 className="text-4xl font-extrabold mb-6 leading-tight ">
                    Crafting Digital Solutions with
                    <br />
                    Creativity & Precision
                </h1>
                <p className="text-lg leading-7 text-gray-600">
                    Hi, I’m <span className="font-bold text-blue-600">Harsh Jha</span>—a passionate
                    <span className="text-blue-600 font-semibold"> Full-Stack Web Developer</span> and
                    <span className="text-blue-600 font-semibold"> Designer</span>.
                    I specialize in building dynamic, user-friendly applications and
                    creating impactful digital experiences that make a difference.
                </p>
                <Link
                    href="/projects"
                    className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                >
                    View my Projects
                </Link>
            </div>

            {/* Links Section */}
            <div className="flex justify-center items-center">
                <SocialLinks SocialLink={SocialLink} />
            </div>
        </section>
    );
};

export default HeroSection;
