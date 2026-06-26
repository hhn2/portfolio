import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsArrowUpRight } from "react-icons/bs"

const projects = [
  {
    name: "English Academy Platform",
    description:
      "Fullstack learning platform with an admin dashboard, video lessons, and authentication.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Auth.js", "AWS S3"],
    image: "/jamieny.png",
    link: "https://jamieny.com",
  },
  {
    name: "QuizifyPDF",
    description:
      "Web app that reads a PDF and automatically generates a quiz from its contents.",
    tags: ["Python", "LangChain", "Streamlit"],
    image: "/Quizify.png",
    link: "https://github.com/hhn2/PDF-chat",
  },
  {
    name: "Two-player Tetris",
    description:
      "Interactive two-player Tetris built with a focus on clean object-oriented design.",
    tags: ["C++"],
    image: "/biquadris.png",
    link: "https://github.com/hhn2/biquadris",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <SlideUp>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          02 — Projects
        </p>
        <p className="mt-6 max-w-2xl text-balance text-2xl font-medium leading-snug tracking-tight md:text-3xl">
          A selection of things I&apos;ve designed, built, and shipped.
        </p>
      </SlideUp>

      <div className="mt-16 flex flex-col">
        {projects.map((project, idx) => (
          <SlideUp key={idx} offset="-200px 0px -200px 0px">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 gap-6 border-t border-border py-10 md:grid-cols-[1fr_1.1fr] md:gap-12"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl border border-border bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {project.name}
                  </h3>
                  <BsArrowUpRight
                    size={22}
                    className="mt-1 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                  />
                </div>

                <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </SlideUp>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
