"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons

const HeroSection = () => {
  return (
    <section id="home" className="font-sans"> 
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-lg border-4 border-black-500 shadow-3xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Hannah!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-black-600">
              Computer Science{" "}
            </span>
            student at the University of Waterloo.
          </p>
          <div className="flex space-x-6 justify-center md:justify-start">
            {/* GitHub Icon */}
            <a
              href="https://github.com/hhn2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-600 hover:text-black-700 text-3xl"
            >
              <FaGithub />
            </a>
            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/hhannahhwang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-600 hover:text-black-700 text-3xl"
            >
              <FaLinkedin />
            </a>
            {/* Email Icon */}
            <a
              href="mailto:h24hwang@uwaterloo.ca"
              className="text-black-600 hover:text-black-700 text-3xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce text-black-600" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
