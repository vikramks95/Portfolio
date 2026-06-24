import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1-FUXHs2P8uk5UAF9-RS43AlvJedb8bgX/view?usp=sharing';
    link.target = '_blank';
    link.click();
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="">
            <a href="#home" className="text-2xl font-bold text-cyan-400">
              VK
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition">About</a>
            <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition">Contact</a>
            <button
              onClick={handleResumeDownload}
              className="flex items-center gap-2 bg-cyan-400 text-slate-900 px-4 py-2 rounded-lg hover:bg-cyan-500 transition font-semibold"
            >
              <Download size={18} />
              Resume
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700 py-4 space-y-2">
            <a href="#home" className="block px-4 py-2 text-gray-300 hover:bg-slate-700">Home</a>
            <a href="#about" className="block px-4 py-2 text-gray-300 hover:bg-slate-700">About</a>
            <a href="#projects" className="block px-4 py-2 text-gray-300 hover:bg-slate-700">Projects</a>
            <a href="#skills" className="block px-4 py-2 text-gray-300 hover:bg-slate-700">Skills</a>
            <a href="#contact" className="block px-4 py-2 text-gray-300 hover:bg-slate-700">Contact</a>
            <button
              onClick={handleResumeDownload}
              className="w-full flex items-center justify-center gap-2 bg-cyan-400 text-slate-900 px-4 py-2 rounded-lg mx-4 font-semibold"
            >
              <Download size={18} />
              Resume
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
