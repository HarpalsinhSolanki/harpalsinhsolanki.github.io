import React from 'react';
import { education } from '../data/educationData';
import { GraduationCap, MapPin, Award } from 'lucide-react';
import Reveal from './Reveal';

const Education: React.FC = () => {
  return (
    <section id="education">
      <Reveal>
        <h2 className="section-title"><span className="section-number">04</span>Education</h2>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="card border-l-2 border-l-accent/60"
            >
              <div className="flex flex-col mb-2">
                <h3 className="text-lg text-ink">{edu.degree}</h3>
                <div className="flex items-center text-ink-faint font-mono text-xs uppercase tracking-wide mt-1">
                  <GraduationCap size={13} className="mr-1.5" />
                  <span>{edu.graduation}</span>
                </div>
              </div>

              <div className="mb-2">
                <div className="flex flex-wrap items-center text-ink-soft mb-1 text-sm gap-x-2">
                  <span className="inline-flex items-center font-medium text-ink">
                    <Award size={13} className="mr-1.5" />
                    {edu.institution}
                  </span>
                  <span className="text-ink-faint">•</span>
                  <span className="inline-flex items-center">
                    <MapPin size={13} className="mr-1.5" />
                    {edu.location}
                  </span>
                </div>
              </div>

              <p className="text-ink-soft text-sm">
                {edu.gpa}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Education;
