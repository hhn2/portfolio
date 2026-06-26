"use client"

import React from "react"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const socials = [
  { icon: FaGithub, href: "https://github.com/hhn2", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/hhannahhwang",
    label: "LinkedIn",
  },
  { icon: FaEnvelope, href: "mailto:h24hwang@uwaterloo.ca", label: "Email" },
]

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col justify-center py-24"
    >
      <div className="animate-fadeUp">
        {/* Availability tag */}
        <div className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open to Summer 2027 internships
        </div>

        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Hannah Hwang
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Computer Science student at the{" "}
          <span className="text-foreground">University of Waterloo</span>,
          building thoughtful software and clean, intentional interfaces.
        </p>

        {/* Social links */}
        <div className="mt-10 flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }, idx) => (
            <a
              key={idx}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="mt-20">
        <Link
          to="about"
          spy
          smooth
          offset={-100}
          duration={500}
          className="inline-flex cursor-pointer items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <HiArrowDown size={16} className="animate-bounce" />
          Scroll
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
