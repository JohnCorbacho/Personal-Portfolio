import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import React from 'react'
import resume from "../assets/resume.pdf"

const Navbar = () => {
 return(
  <nav className=" mb-20 flex items-center justify-between py-6">
     <div className="flex flex-shrink-0 items-center">
     <a href={resume} target="_blank" rel="noopener noreferrer" className="text-xl text-neutral-300 hover:text-cyan-300">
         Resume
       </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/john-corbacho" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/JohnCorbacho" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/john_190_" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter />
            </a>
        </div>
  </nav>
 );
};

export default Navbar