import React from 'react';
import { education } from '../data/educationData';
import { GraduationCap, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education">
      <h2 className="section-title mb-6">Education</h2>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <div
            key={index}
            className="card border-l-4 border-l-accent"
          >
            <div className="flex flex-col mb-2">
              <h3 className="text-lg font-semibold text-primary">{edu.degree}</h3>
              <div className="flex items-center text-accent-dark font-medium text-sm mt-1">
                <GraduationCap size={14} className="mr-1" />
                <span>{edu.graduation}</span>
              </div>
            </div>

            <div className="mb-2">
              <div className="flex items-center text-secondary mb-1 text-sm">
                <Award size={14} className="mr-1" />
                <span className="font-medium">{edu.institution}</span>
                <span className="mx-2">•</span>
                <MapPin size={14} className="mr-1" />
                <span>{edu.location}</span>
              </div>
            </div>

            <p className="text-text text-sm">
              {edu.gpa}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
