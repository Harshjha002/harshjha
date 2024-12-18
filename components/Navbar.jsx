import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar px-5 py-4 border-b border-gray-500 shadow-sm">
            {/* Branding Section */}
            <div className="flex-1">
                <Link href={'/'} className="flex flex-col px-4 text-xl font-semibold text-gray-800 hover:text-gray-500 transition">
                    <h1 className="text-lg text-white md:text-xl">Harsh Jha</h1>
                    <p className="text-sm text-gray-500 md:text-base">Full-Stack Developer</p>
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={'/projects'}>My Projects</Link></li>
                    <li><Link href={'/admin'}>Admin</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
