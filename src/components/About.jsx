import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Get to know my background, educational qualifications, and professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Professional Summary */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-md hover:shadow-lg transition border border-slate-700 hover:border-cyan-400/50">
            <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I am a passionate B.Tech-CSE student with hands-on experience in building
              scalable web applications. With strong communication skills and a proactive
              approach, I thrive in collaborative environments where I can contribute
              to innovative solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My goal is to become a proficient Software Developer with expertise in
              modern web technologies. I enjoy solving complex problems and continuously
              learning new skills to enhance my development capabilities.
            </p>
          </div>

          {/* Education */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-md hover:shadow-lg transition border border-slate-700 hover:border-cyan-400/50">
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                  Bachelor of Technology in Computer Science
                </h4>
                <p className="text-gray-300 font-medium">IIMT College of Engineering, Greater Noida</p>
                <p className="text-gray-500 text-sm mt-1">2022 - 2026</p>
                <p className="text-gray-400 mt-3">
                  <span className="font-semibold">CGPA:</span> 7.2/10
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Relevant Coursework</h4>
                <ul className="space-y-2">
                  {[
                    'Data Structures and Algorithms',
                    'Object-Oriented Programming',
                    'Database Management Systems',
                    'Operating System',
                    'Computer Networks'
                  ].map((course, index) => (
                    <li key={index} className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;