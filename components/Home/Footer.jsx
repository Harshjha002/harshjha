import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A19] text-gray-300 py-8 border-t border-gray-700">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold text-[#31511E] mb-4">
          Thank You for Visiting My Website!
        </h1>
        <p className="text-sm">
          © {new Date().getFullYear()} Harsh Jha. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed & Developed with ❤️ by Harsh Jha.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
