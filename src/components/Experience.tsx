import React from 'react';
import { experiences } from '../data/experienceData';
import { Calendar, MapPin, Building } from 'lucide-react';
import Reveal from './Reveal';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <Reveal>
        <h2 className="section-title"><span className="section-number">02</span>Experience</h2>

        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="card border-l-2 border-l-accent/60"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-1">
                <h3 className="text-lg text-ink">{experience.position}</h3>
                <div className="flex items-center text-ink-faint text-xs font-mono uppercase tracking-wide">
                  <Calendar size={13} className="mr-1.5" />
                  <span>{experience.duration}</span>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex flex-wrap items-center text-ink-soft mb-1 text-sm gap-x-2">
                  <span className="inline-flex items-center font-medium text-ink">
                    <Building size={13} className="mr-1.5" />
                    {experience.company}
                  </span>
                  <span className="text-ink-faint">•</span>
                  <span className="inline-flex items-center">
                    <MapPin size={13} className="mr-1.5" />
                    {experience.location}
                  </span>
                </div>
              </div>

              <p className="text-ink-soft leading-relaxed text-sm">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Experience;
