import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-8 bg-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div className="lg:col-span-2 space-y-3">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-black">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl font-bold text-gray-800">
              {personalInfo.title}
            </h2>
          </div>

          <p className="text-sm text-gray-700">
            10+ years of experience in Android and Cross Platform Apps Development with expertise in Java, Kotlin, and React Native.
          </p>

          <div className="flex flex-wrap gap-2">
            <a 
              href="#contact" 
              className="btn btn-primary flex items-center gap-1 text-sm"
            >
              <Mail size={14} />
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="btn btn-outline flex items-center gap-1 text-sm"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-blue-600"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-blue-600"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-1 flex justify-center lg:justify-end">
          <div className="w-32 h-32 relative">
            <div className="absolute inset-0 bg-gray-400 border-4 border-gray-600" style={{borderStyle: 'inset'}}></div>
            <div className="absolute inset-2 bg-gray-200 border-2 border-gray-500 flex items-center justify-center" style={{borderStyle: 'inset'}}>
              <div className="text-2xl font-bold text-gray-600">HS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;