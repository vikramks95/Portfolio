import React from 'react';
import { ArrowRight, Code } from 'lucide-react';
import img from './Profile.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1 space-y-6">
            <div className="space-y-2">
              <p className="text-cyan-400 font-semibold text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                Vikram Kumar
              </h1>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
              Software Developer
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              I specialize in building scalable web applications using the MERN stack,
              with a strong passion for web development.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full border border-cyan-400/30">
                <Code size={18} className="text-cyan-400" />
                <span className="text-gray-300 font-medium">MERN Stack</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full border border-cyan-400/30">
                <Code size={18} className="text-cyan-400" />
                <span className="text-gray-300 font-medium">Web Development</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://drive.google.com/file/d/1g_y0PywX637dgmF3N0n6mV0I4gA3D6YV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition"
              >
                Get Resume
              </a>
              <a
                href="#projects"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition flex items-center gap-2"
              >
                View Projects <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-cyan-400/50 shadow-2xl shadow-cyan-400/20">
              <div className="absolute inset-0  from-cyan-400/30 to-slate-800/30"></div>
              <div className="w-full h-full bg-gradient from-cyan-300/40 to-slate-700 flex items-center justify-center">
                <span className="text-8xl">
                  <img src={img} alt="profile" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;