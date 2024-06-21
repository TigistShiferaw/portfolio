// components/Footer.tsx

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className=" mr-6 ml-96">
              <span className="ml-96 mr-4">+251 937363056</span>
              <span> tigistshif56@gmail.com</span>
            </div>
            <div className="flex items-center">
              <a href="https://github.com/yourusername" className="mr-4" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 my-4 border-solid border-2" />
        <div className="flex items-center">
          <div className="ml-16 flex">
            <Link href="/" passHref>
              <span className="mr-4 cursor-pointer">Home</span>
            </Link>
            <Link href="/About" passHref>
              <span className="mr-4 cursor-pointer">About</span>
            </Link>
            <Link href="/Technologies" passHref>
              <span className="mr-4 cursor-pointer">Technologies</span>
            </Link>
            <Link href="Projects" passHref>
              <span className="mr-4 cursor-pointer">Projects</span>
            </Link>
            <Link href="/Contact" passHref>
              <span className="mr-60 cursor-pointer">Contact</span>
            </Link>
          </div>
          <p className="text-gray-500 ml-80">Designed and built by Tigist SY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
