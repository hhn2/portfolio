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
  { 
    title: "Software Engineer Intern | Manulife", 
    date: "Jan 2026 - Apr 2026",
    image: "manulife.png"
  },
  { 
    title: "Software Engineer Intern | Fundserv", 
    date: "Sep 2025 - Dec 2025",
    image: "fundserv.png"
  },

  { 
    title: "Data Science Intern | Sundosoft", 
    date: "May 2024 - Aug 2024",
    image: "sundosoft.png"
  },
  
]
  


const education = [
  {
    institution: "University of Waterloo",
    program: "Candidate for Bachelor of Honours Computer Science",
    date: "Sep 2023 - Present",
    image: "uwaterloo.png"
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

        <div className="flex flex-col space-y-10 md:p-4">
          <div className="w-full">
            <h1 className="text-2xl font-bold mb-6">Education</h1>
            <ul>
              {education.map((edu, idx) => (
                <li key={idx} className="mb-8 flex items-start gap-6">
                  <img 
                    src={edu.image} 
                    alt={edu.institution}
                    className="w-24 h-24 rounded-lg object-contain flex-shrink-0"
                  />
                  <div>
                    <p className="font-bold text-xl">{edu.institution}</p>
                    <p className="text-lg">{edu.program}</p>
                    <p className="text-gray-500 text-lg">{edu.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <h1 className="text-2xl font-bold mb-6">Experience</h1>
            <ul>
              {experiences.map((experience, idx) => (
                <li key={idx} className="mb-8 flex items-start gap-6">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-24 h-24 rounded-lg object-contain flex-shrink-0"
                  />
                  <div>
                    <p className="font-bold text-xl">{experience.title}</p>
                    <p className="text-gray-500 text-lg">{experience.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="w-full">
            {/* <h1 className="text-2xl font-bold mb-6">Skills</h1> */}
            {/* <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((skill, idx) => (
                <p
                  key={idx}
                  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                  {skill}
                </p>
              ))}
            </div> */}
          {/* </div> */} 
        </div>
      </div>
    </section>
  )
}

export default AboutSection