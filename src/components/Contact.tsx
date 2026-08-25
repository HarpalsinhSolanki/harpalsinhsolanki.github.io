import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <Reveal>
        <h2 className="section-title mb-6">Get In Touch</h2>

        <div className="card text-center max-w-2xl mx-auto">
          <p className="text-text leading-relaxed mb-6">
            I'm currently open to new opportunities and collaborations. Whether you have a
            question or just want to say hi, my inbox is always open.
          </p>

          <a href={`mailto:${personalInfo.email}`} className="btn-primary mb-6">
            <Mail size={16} />
            Say Hello
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-left border-t border-white/10 pt-6">
            <div className="flex items-center gap-2 text-text">
              <Mail size={16} className="text-primary shrink-0" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 text-text">
              <Phone size={16} className="text-primary shrink-0" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-text sm:col-span-2">
              <MapPin size={16} className="text-primary shrink-0" />
              <span>{personalInfo.address}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5 pt-6 mt-6 border-t border-white/10">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
