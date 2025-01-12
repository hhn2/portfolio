import React from "react"

const skills = [
  "Python",
  "C/C++",
  "JavaScript",
  "HTML/CSS",
  "Racket",
  "Git",
  "GitHub",
  "VS Code",
  "Linux",
  "vi",
  "Eclipse IDE",
  "LangChain",
  "Streamlit",
  "PostgreSQL",
  "jQuery",
  "Django",
  "Bootstrap",
  "NumPy",
  "Pandas",
  "Matplotlib",
]

const experiences = [
  { title: "Data Scientist | Sundosoft", date: "May 2024 - Sep 2024" },
]

const education = [
  {
    institution: "University of Waterloo",
    program: "Bachelor of Honours Computer Science",
    date: "Sep 2023 - Present",
  },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-black-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold mb-6">Education</h1>
            <ul>
              {education.map((edu, idx) => (
                <li key={idx} className="mb-4">
                  <p className="font-bold">{edu.institution}</p>
                  <p>{edu.program}</p>
                  <p className="text-gray-500">{edu.date}</p>
                </li>
              ))}
            </ul>

            <h1 className="text-2xl font-bold mt-10 mb-6">Experience</h1>
            <ul>
              {experiences.map((experience, idx) => (
                <li key={idx} className="mb-4">
                  <p className="font-bold">{experience.title}</p>
                  <p className="text-gray-500">{experience.date}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((skill, idx) => (
                <p
                  key={idx}
                  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
