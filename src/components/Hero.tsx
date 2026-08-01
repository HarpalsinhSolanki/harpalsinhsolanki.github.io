import React from 'react';
import { Mail, Github, Linkedin, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Hero: React.FC = () => {
  const initials = personalInfo.name
    .split(' ')
    .map((part) => part[0])
    .join('');

  return (
    <section id="home" className="bg-primary py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2 space-y-5 animate-fade-in">
            <p className="text-accent font-mono text-sm">Hi, my name is</p>
            <div className="space-y-1">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl text-slate-300 font-bold">
                {personalInfo.title}
              </h2>
            </div>

            <p className="text-slate-300 max-w-xl leading-relaxed">
              11.5+ years of experience in Android and cross-platform apps development with
              expertise in Java, Kotlin, and React Native.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="btn-primary">
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href="#projects"
                className="btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm border border-slate-500 text-white hover:border-accent hover:text-accent transition-colors"
              >
                View Projects
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-secondary-light ring-4 ring-accent/40 flex items-center justify-center">
              <span className="text-4xl sm:text-5xl font-bold text-accent">{initials}</span>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex justify-center mt-12">
          <a href="#about" className="text-slate-400 hover:text-accent transition-colors animate-pulse-slow" aria-label="Scroll to About">
            <ArrowDown size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
