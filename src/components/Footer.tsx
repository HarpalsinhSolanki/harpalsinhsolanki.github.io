import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-ink-faint">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>

          <div className="flex items-center gap-5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-faint hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-faint hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="text-ink-faint hover:text-accent transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
