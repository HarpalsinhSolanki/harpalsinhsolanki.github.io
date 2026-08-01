import React from 'react';
import { education } from '../data/educationData';
import { GraduationCap, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-6">
      <h2 className="section-title mb-4">Education</h2>

      <div className="space-y-3">
        {education.map((edu, index) => (
          <div
            key={index}
            className="card"
          >
            <div className="flex flex-col mb-2">
              <h3 className="text-lg font-semibold text-black">{edu.degree}</h3>
              <div className="flex items-center text-blue-600 font-medium text-sm mt-1">
                <GraduationCap size={14} className="mr-1" />
                <span>{edu.graduation}</span>
              </div>
            </div>

            <div className="mb-2">
              <div className="flex items-center text-gray-700 mb-1 text-sm">
                <Award size={14} className="mr-1" />
                <span className="font-medium">{edu.institution}</span>
                <span className="mx-2">•</span>
                <MapPin size={14} className="mr-1" />
                <span>{edu.location}</span>
              </div>
            </div>

            <p className="text-gray-700 text-sm">
              {edu.gpa}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
