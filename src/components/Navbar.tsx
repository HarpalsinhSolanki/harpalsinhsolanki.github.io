import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  // { name: 'Certifications', href: '#certifications' }, // hidden for now
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 bg-paper/95 border-b transition-shadow duration-200 ${
        scrolled ? 'border-line shadow-card' : 'border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center gap-2 font-mono text-sm text-ink">
            <span className="w-7 h-7 flex items-center justify-center border border-ink/30 text-xs font-semibold">HS</span>
            <span className="hidden sm:inline text-ink-soft">Harpalsinh Solanki</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent'
                    : 'text-ink-faint hover:text-ink'
                }`}
              >
                <span className="text-ink-faint/70 mr-1">{String(i + 1).padStart(2, '0')}</span>
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-ink"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-line">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 py-3 px-1 font-mono text-sm text-ink-soft hover:text-accent border-b border-line last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-ink-faint text-xs">{String(i + 1).padStart(2, '0')}</span>
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
