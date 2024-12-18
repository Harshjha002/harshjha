import Link from 'next/link';
import React from 'react';

const SocialLinks = ({ SocialLink }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Connect with me</h1>

      {/* Social Links */}
      <div className="flex space-x-6">
        {SocialLink.map((link) => (
          <div
            key={link.name}
            className="flex flex-col items-center text-center"
          >
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              {/* Social Logo */}
              <div className="w-12 h-12 flex justify-center items-center rounded-full bg-blue-600 text-white hover:bg-blue-800 transition duration-300">
                {link.logo}
              </div>
              {/* Social Name */}
              <div className="mt-2 text-sm text-gray-600 group-hover:text-blue-600 transition duration-300">
                {link.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
