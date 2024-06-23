// components/Navbar.tsx

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-end items-center sm:px-16 px-6 py-4'>
        <div className="flex items-center">
          <Link href="/" passHref>
            <span className='mr-16 cursor-pointer'>Home</span>
          </Link>
          <Link href="/About" passHref>
            <span className='mr-16 cursor-pointer'>About</span>
          </Link>
          <Link href="/Technologies" passHref>
            <span className='mr-16 cursor-pointer'>Technologies</span>
          </Link>
          <Link href="/Projects" passHref>
            <span className='mr-16 cursor-pointer'>Projects</span>
          </Link>
          <Link href="/Contact" passHref>
            <span className='mr-16 cursor-pointer'>Contact</span>
          </Link>
          <a href="https://github.com/TigistShiferaw" className="mr-6 cursor-pointer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/tigist-shiferaw-yitayew-5439b7219/" className="cursor-pointer">
            <FaLinkedin size={24} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
