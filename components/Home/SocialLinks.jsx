import Link from 'next/link';
import React from 'react';

const SocialLinks = ({ SocialLink }) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-[#31511E]">Connect with me</h2>

      {/* Social Links */}
      <div className="flex space-x-6">
        {SocialLink.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            {/* Social Icon */}
            <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#31511E] text-white hover:bg-[#859F3D] transition duration-300">
              {link.logo}
            </div>
            {/* Social Name */}
            <span className="mt-2 text-sm text-gray-300 group-hover:text-[#31511E] transition duration-300">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
