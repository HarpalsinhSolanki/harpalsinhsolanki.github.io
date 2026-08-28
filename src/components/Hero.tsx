import React from 'react';
import { Mail, Github, Linkedin, ArrowDown, Download } from 'lucide-react';
import { personalInfo, getYearsOfExperience, getHeroTagline } from '../data/personalInfo';
import { projects } from '../data/projectsData';

const Hero: React.FC = () => {
  const years = getYearsOfExperience();

  const facts = [
    { label: 'Experience', value: `${years}+ yrs` },
    { label: 'Projects', value: `${projects.length}+` },
    { label: 'Focus', value: 'Frontend JS · Backend SQL' },
    { label: 'Based in', value: 'Anand, Gujarat, India' },
  ];

  return (
    <section id="home" className="border-b-0 !py-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <p className="meta-label mb-4">Portfolio — {new Date().getFullYear()}</p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-3 max-w-3xl">
          {personalInfo.name}
        </h1>
        <p className="font-mono text-sm text-accent tracking-wide mb-8">
          {personalInfo.title} — Mobile &amp; Cross-Platform
        </p>

        <p className="text-ink-soft max-w-2xl leading-relaxed mb-10">
          {getHeroTagline(years)}
        </p>

        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mb-10 border-y border-line py-6">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="meta-label mb-1">{fact.label}</dt>
              <dd className="text-ink text-sm">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-wrap items-center gap-6">
          <a href="/resume.pdf" download className="btn-primary">
            <Download size={14} />
            Download Resume
          </a>
          <a href={`mailto:${personalInfo.email}`} className="btn-outline">
            <Mail size={14} />
            Get in touch
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-accent transition-colors underline decoration-line hover:decoration-accent"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-accent transition-colors underline decoration-line hover:decoration-accent"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
        </div>

        <div className="hidden sm:flex mt-16">
          <a href="#about" className="text-ink-faint hover:text-accent transition-colors" aria-label="Scroll to About">
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
