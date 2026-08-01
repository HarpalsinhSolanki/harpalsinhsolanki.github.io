import React from 'react';
import { personalInfo } from '../data/personalInfo';

const About: React.FC = () => {
  return (
    <section id="about">
      <h2 className="section-title mb-6">About Me</h2>

      <div className="card">
        <p className="text-text leading-relaxed mb-4">
          {personalInfo.objective}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm border-t border-slate-100 pt-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-semibold text-primary min-w-[80px]">Phone:</span>
              <span className="text-text">{personalInfo.phone}</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-primary min-w-[80px]">Email:</span>
              <span className="text-text">{personalInfo.email}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-semibold text-primary min-w-[80px]">Address:</span>
              <span className="text-text">{personalInfo.address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
