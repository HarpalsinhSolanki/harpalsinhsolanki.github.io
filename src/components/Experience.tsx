import React from 'react';
import { experiences } from '../data/experienceData';
import { Calendar, MapPin, Building } from 'lucide-react';
import Reveal from './Reveal';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <Reveal>
        <h2 className="section-title mb-6">Professional Experience</h2>

        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="card border-l-2 border-l-primary/60"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-lg font-semibold text-primary">{experience.position}</h3>
                <div className="flex items-center text-secondary font-medium text-sm font-mono">
                  <Calendar size={14} className="mr-1" />
                  <span>{experience.duration}</span>
                </div>
              </div>

              <div className="mb-2">
                <div className="flex items-center text-secondary mb-1 text-sm">
                  <Building size={14} className="mr-1" />
                  <span className="font-medium">{experience.company}</span>
                  <span className="mx-2">•</span>
                  <MapPin size={14} className="mr-1" />
                  <span>{experience.location}</span>
                </div>
              </div>

              <p className="text-text leading-relaxed text-sm">
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
