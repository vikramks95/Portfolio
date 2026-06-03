import React from 'react';
import { Code2, Wrench, BookOpen, Database } from 'lucide-react';

const SkillCard = ({ title, skills, icon: Icon }) => (
  <div className="bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-slate-700 hover:border-cyan-400/50">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-slate-700 rounded-lg text-cyan-400 ">
        <Icon size={24} />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-600 hover:border-cyan-400/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const technicalSkills = [
    {
      title: "Programming Languages",
      skills: ["C++", "Java", "JavaScript"],
      icon: Code2
    },
    {
      title: "Development",
      skills: [ "HTML", "CSS", "JavaScript", "Node.js"],
      icon: BookOpen
    },
    {
      title: "Frameworks & Libraries",
      skills: [ "React.js", "Express.js", "TailwindCSS"],
      icon: BookOpen
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL"],
      icon: Database
    },
    {
      title: "Developer Tools",
      skills: [ "VS Code", "GitHub", "Postman"],
      icon: Wrench
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Decision Making",
    "Public Speaking",
    "Leadership",
    "Quick Learning"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive collection of my technical and soft skills that I've developed over the years.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Soft Skills</h3>
          <div className="bg-slate-900 p-8 rounded-2xl shadow-md border border-slate-700">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-4 rounded-xl text-center border border-slate-700 hover:border-cyan-400/50 transition"
                >
                  <p className="font-semibold text-gray-300">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;