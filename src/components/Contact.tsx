import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <Reveal>
        <h2 className="section-title"><span className="section-number">06</span>Get In Touch</h2>

        <div className="card max-w-2xl">
          <p className="text-ink-soft leading-relaxed mb-6">
            I'm currently open to new opportunities and collaborations. Whether you have a
            question or just want to say hi, my inbox is always open.
          </p>

          <a href={`mailto:${personalInfo.email}`} className="btn-primary mb-6">
            <Mail size={14} />
            Say Hello
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm border-t border-line pt-6">
            <div className="flex items-center gap-2 text-ink-soft">
              <Mail size={15} className="text-accent shrink-0" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 text-ink-soft">
              <Phone size={15} className="text-accent shrink-0" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-ink-soft sm:col-span-2">
              <MapPin size={15} className="text-accent shrink-0" />
              <span>{personalInfo.address}</span>
            </div>
          </div>

          <div className="flex items-center gap-5 pt-6 mt-6 border-t border-line">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={17} />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
