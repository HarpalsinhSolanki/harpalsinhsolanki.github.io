import React from 'react';
import { Mail, Github, Linkedin, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Hero: React.FC = () => {
  const initials = personalInfo.name
    .split(' ')
    .map((part) => part[0])
    .join('');

  return (
    <section id="home" className="relative py-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2 space-y-5 animate-fade-in">
            <p className="text-primary font-mono text-sm tracking-wide">&gt; Hi, my name is</p>
            <div className="space-y-1">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-primary-light to-secondary-light bg-clip-text text-transparent">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl text-slate-300 font-display font-bold">
                {personalInfo.title}
              </h2>
            </div>

            <p className="text-slate-400 max-w-xl leading-relaxed">
              11.5+ years of experience in Android and cross-platform apps development with
              expertise in Java, Kotlin, and React Native.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="btn-primary">
                <Mail size={16} />
                Contact Me
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-40 animate-pulse-slow" />
              <div className="relative w-full h-full rounded-full bg-[#0a0f1a] border border-white/10 ring-1 ring-primary/40 flex items-center justify-center">
                <span className="text-4xl sm:text-5xl font-display font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  {initials}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex justify-center mt-12">
          <a href="#about" className="text-slate-500 hover:text-primary transition-colors animate-pulse-slow" aria-label="Scroll to About">
            <ArrowDown size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
