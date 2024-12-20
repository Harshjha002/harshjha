'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { myTechStack } from '@/data';

const TechStack = () => {
    const [activeLabel, setActiveLabel] = useState(null);

    const toggleAccordion = (label) => {
        setActiveLabel(activeLabel === label ? null : label);
    };

    return (
        <section id="Tech-Stack" className="p-8 mb-24">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-[#31511E] mb-8 underline decoration-[#859F3D] underline-offset-8">
                    Tech Stack
                </h1>
                <p className="text-lg text-gray-300">
                    A showcase of the technologies I work with, categorized for better clarity.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* All Skills Section */}
                <div className="bg-slate-950 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-[#31511E] mb-8 px-16 underline">
                        Technologies I Work With
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {myTechStack
                            .find((item) => item.label === 'All')
                            ?.stack.map((tech) => (
                                <Link
                                    href="/projects"
                                    key={tech}
                                    aria-label={`Explore projects using ${tech}`}
                                    className="flex items-center justify-center p-4 bg-[#1A1A19] text-[#F6FCDF] rounded-lg shadow-md transition-transform hover:scale-105"
                                >
                                    <h3 className="text-lg font-semibold text-center">{tech}</h3>
                                </Link>
                            ))}
                    </div>
                </div>
                {/* Categories Section */}
                <div className="bg-slate-950 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-[#31511E] mb-6 px-12 underline">
                        Technology Categories
                    </h2>
                    {myTechStack
                        .filter((item) => item.label !== 'All')
                        .map((tech) => (
                            <div key={tech.label} className="bg-slate-950 rounded-lg shadow-lg">
                                <button
                                    className="w-full text-left p-4 text-[#31511E] font-bold text-lg hover:bg-[#859F3D] hover:text-[#F6FCDF] transition-colors rounded-t-lg"
                                    onClick={() => toggleAccordion(tech.label)}
                                    aria-expanded={activeLabel === tech.label}
                                >
                                    {tech.label}
                                </button>
                                {activeLabel === tech.label && (
                                    <div className="p-4 grid grid-cols-2 gap-4 bg-[#1A1A19] rounded-b-lg">
                                        {tech.stack.map((item) => (
                                            <Link
                                                href="/projects"
                                                key={item}
                                                aria-label={`Explore projects using ${item}`}
                                                className="flex items-center justify-center p-3 bg-[#31511E] text-[#F6FCDF] rounded-lg shadow-md transition-transform hover:scale-105"
                                            >
                                                {item}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
