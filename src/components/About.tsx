import React from 'react';
import { personalInfo } from '../data/personalInfo';

const About: React.FC = () => {
  return (
    <section id="about" className="py-6">
      <h2 className="section-title mb-4">About Me</h2>

      <div className="card">
        <p className="text-gray-700 leading-relaxed text-sm mb-3">
          {personalInfo.objective}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="space-y-1">
            <div className="flex items-start">
              <span className="font-semibold text-black min-w-[80px]">Phone:</span>
              <span className="text-gray-700">{personalInfo.phone}</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-black min-w-[80px]">Email:</span>
              <span className="text-gray-700">{personalInfo.email}</span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-start">
              <span className="font-semibold text-black min-w-[80px]">Address:</span>
              <span className="text-gray-700">{personalInfo.address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
