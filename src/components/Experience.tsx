import React from 'react';
import { experiences } from '../data/experienceData';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-6">
      <h2 className="section-title mb-4">Professional Experience</h2>
      
      <div className="space-y-3">
        {experiences.map((experience, index) => (
          <div 
            key={index} 
            className="card"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="text-lg font-semibold text-black">{experience.position}</h3>
              <div className="flex items-center text-blue-600 font-medium text-sm">
                <Calendar size={14} className="mr-1" />
                <span>{experience.duration}</span>
              </div>
            </div>
            
            <div className="mb-2">
              <div className="flex items-center text-gray-700 mb-1 text-sm">
                <Building size={14} className="mr-1" />
                <span className="font-medium">{experience.company}</span>
                <span className="mx-2">•</span>
                <MapPin size={14} className="mr-1" />
                <span>{experience.location}</span>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-sm">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;