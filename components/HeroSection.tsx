"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="home" className="font-sans">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        
        {/* --- Left side: image --- */}
        <div className="md:mt-2 md:w-1/2">
          <div className="relative w-[325px] h-[325px] mx-auto">
            <Image
              src="/headshot2.JPG"
              alt="Hannah Hwang"
              fill
              className="rounded-full shadow-xl object-cover"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 to-yellow-500 opacity-20 -z-10 blur-md"></div>
          </div>
        </div>

        {/* --- Right side: text --- */}
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl whitespace-nowrap">
            Hi, I'm Hannah!
          </h1>

          <p className="text-lg mt-4 mb-3 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-black-600">
              Computer Science{" "}
            </span>
            student at the University of Waterloo.
          </p>

          {/* --- Social Icons --- */}
          <div className="flex space-x-6 justify-center md:justify-start mt-6">
            <a
              href="https://github.com/hhn2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-600 hover:text-black-700 text-3xl transition-transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/hhannahhwang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-600 hover:text-black-700 text-3xl transition-transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:h24hwang@uwaterloo.ca"
              className="text-black-600 hover:text-black-700 text-3xl transition-transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* --- Scroll-down arrow --- */}
      <div className="flex flex-row items-center text-center justify-center">
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