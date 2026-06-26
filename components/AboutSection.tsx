import React from "react"
import SlideUp from "./SlideUp"

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Wealthsimple",
    date: "Incoming Fall 2026",
    image: "wealthsimple.png",
  },
  {
    title: "Software Engineer Intern",
    company: "Manulife",
    date: "Jan 2026 — Apr 2026",
    image: "manulife.png",
  },
  {
    title: "Software Engineer Intern",
    company: "Fundserv",
    date: "Sep 2025 — Dec 2025",
    image: "fundserv.png",
  },
  {
    title: "Data Science Intern",
    company: "Sundosoft",
    date: "May 2024 — Aug 2024",
    image: "sundosoft.png",
  },
]

const education = [
  {
    institution: "University of Waterloo",
    program: "Bachelor of Honours, Computer Science",
    date: "Sep 2023 — Present",
    image: "uwaterloo.png",
  },
]

type Item = {
  image: string
  date: string
  primary: string
  secondary: string
}

function TimelineRow({ item }: { item: Item }) {
  return (
    <div className="group grid grid-cols-1 gap-3 border-t border-border py-7 sm:grid-cols-[140px_1fr] sm:gap-8">
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground sm:pt-1">
        {item.date}
      </p>
      <div className="flex items-start gap-4">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.primary}
          className="h-12 w-12 flex-shrink-0 rounded-md object-contain"
        />
        <div>
          <p className="text-lg font-medium leading-snug">{item.primary}</p>
          <p className="mt-0.5 text-base text-muted-foreground">
            {item.secondary}
          </p>
        </div>
      </div>
    </div>
  )
}

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
    {children}
  </h2>
)

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <SlideUp>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          01 — About
        </p>
      </SlideUp>

      <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-[200px_1fr] md:gap-12">
        <div className="md:sticky md:top-28 md:self-start">
          <SectionHeading>Education</SectionHeading>
        </div>
        <div>
          {education.map((edu, idx) => (
            <TimelineRow
              key={idx}
              item={{
                image: edu.image,
                date: edu.date,
                primary: edu.institution,
                secondary: edu.program,
              }}
            />
          ))}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-[200px_1fr] md:gap-12">
        <div className="md:sticky md:top-28 md:self-start">
          <SectionHeading>Experience</SectionHeading>
        </div>
        <div>
          {experiences.map((exp, idx) => (
            <TimelineRow
              key={idx}
              item={{
                image: exp.image,
                date: exp.date,
                primary: exp.company,
                secondary: exp.title,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
